"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import type { Group, Mesh } from "three"
import { TextureLoader, Color } from "three"
import gsap from "gsap"

interface BookCarousel3DProps {
  books: Array<{
    title: string
    author: string
    image?: string
  }>
  activeIndex: number
  onIndexChange: (index: number) => void
  onHoverActive?: (hovered: boolean) => void
  isMobile?: boolean
  scale?: number
}

const wrapIndex = (index: number, length: number) =>
  (index + length) % length

export function BookCarousel3D({
  books,
  activeIndex,
  onIndexChange,
  onHoverActive,
  isMobile,
  scale: externalScale = 1,
}: BookCarousel3DProps) {
  const total = books.length

  const getBookTransform = (index: number, active: number) => {
    let relative = index - active

    if (relative > total / 2) relative -= total
    if (relative < -total / 2) relative += total

    const spacing = 3
    const x = relative * spacing
    const z = -Math.abs(relative) * 0.45
    const rotationY = relative * 0.22

    const baseScale =
      relative === 0
        ? 1.8
        : Math.max(0.85, 1.2 - Math.abs(relative) * 0.25)

    return {
      x,
      z,
      rotationY,
      scale: baseScale * externalScale,
    }
  }

  return (
    <group>
      {books.map((_, index) => {
        const t = getBookTransform(index, activeIndex)

        return (
          <BookMesh
            key={index}
            bookIndex={index + 1}
            bookImage={books[index].image}
            isActive={index === activeIndex}
            position={[t.x, 0, t.z]}
            rotationY={t.rotationY}
            scale={t.scale}
            onClick={() => onIndexChange(wrapIndex(index, total))}
            onHoverActive={onHoverActive}
            isMobile={isMobile}
          />
        )
      })}
    </group>
  )
}

interface BookMeshProps {
  bookIndex: number
  bookImage?: string
  isActive: boolean
  position: [number, number, number]
  rotationY: number
  scale: number
  onClick: () => void
  onHoverActive?: (hovered: boolean) => void
  isMobile?: boolean
}

function BookMesh({
  bookIndex,
  bookImage,
  isActive,
  position,
  rotationY,
  scale,
  onClick,
  onHoverActive,
  isMobile,
}: BookMeshProps) {
  const groupRef = useRef<Group>(null)
  const frontRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [texture, setTexture] = useState<any>(null)
  const [textureError, setTextureError] = useState(false)

  const imagePath = bookImage || `/books/book-${bookIndex}.png`

  // Manually load texture with error handling
  useEffect(() => {
    const loader = new TextureLoader()
    loader.load(
      imagePath,
      (loadedTexture) => {
        loadedTexture.flipY = true
        loadedTexture.colorSpace = "srgb" as any
        loadedTexture.anisotropy = 8
        loadedTexture.generateMipmaps = true
        loadedTexture.needsUpdate = true
        setTexture(loadedTexture)
        setTextureError(false)
      },
      undefined,
      (error) => {
        console.warn(`Failed to load texture: ${imagePath}`, error)
        setTextureError(true)
        setTexture(null)
      }
    )
  }, [imagePath])

  /**
   * ✅ GSAP POSITION / ROTATION / SCALE
   */
  useEffect(() => {
    if (!groupRef.current) return

    gsap.to(groupRef.current.position, {
      x: position[0],
      y: 0,
      z: position[2],
      duration: 0.9,
      ease: "power4.out",
    })

    gsap.to(groupRef.current.rotation, {
      y: rotationY,
      duration: 0.9,
      ease: "power4.out",
    })

    gsap.to(groupRef.current.scale, {
      x: scale,
      y: scale,
      z: scale,
      duration: 0.9,
      ease: "power4.out",
    })
  }, [position, rotationY, scale])

  /**
   * ✅ HOVER + ACTIVE DEPTH EFFECT
   */
  useFrame(({ camera }) => {
    if (!groupRef.current) return

    groupRef.current.lookAt(camera.position)

    const lift = hovered || isActive ? 0.25 : 0
    const zPop = isActive ? 0.35 : 0
    const scaleBoost = hovered || isActive ? 1.12 : 1

    gsap.to(groupRef.current.position, {
      y: lift,
      z: position[2] + zPop,
      duration: 0.35,
      ease: "power2.out",
    })

    if (frontRef.current) {
      frontRef.current.scale.lerp(
        { x: scaleBoost, y: scaleBoost, z: scaleBoost } as any,
        0.12
      )
    }
  })

  return (
    <group
      ref={groupRef}
      onClick={onClick}
      onPointerOver={() => {
        setHovered(true)
        if (isActive) onHoverActive?.(true)
      }}
      onPointerOut={() => {
        setHovered(false)
        if (isActive) onHoverActive?.(false)
      }}
    >
      {/* FRONT COVER */}
      <mesh ref={frontRef}>
        <planeGeometry args={[2.1, 2.9]} />
        <meshStandardMaterial
          map={texture && !textureError ? texture : null}
          color={textureError || !texture ? new Color(0xffffff) : undefined}
          transparent={texture && !textureError}
          alphaTest={texture && !textureError ? 0.15 : 0}
          roughness={isActive ? 0.25 : 0.45}
          metalness={isActive ? 0.45 : 0.25}
          envMapIntensity={isActive ? 1.3 : 0.8}
        />
      </mesh>

      {/* SPINE */}
      <mesh position={[-1.05, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.16, 2.9]} />
        <meshStandardMaterial
          color="#111"
          roughness={0.6}
          metalness={0.35}
        />
      </mesh>

      {/* BACK */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[2.1, 2.9]} />
        <meshStandardMaterial
          color="#1f1f1f"
          roughness={0.85}
          metalness={0.15}
        />
      </mesh>
    </group>
  )
}
