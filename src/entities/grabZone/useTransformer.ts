import React, { useEffect } from "react";

export function useTransformer(
  transformerRef: React.RefObject<HTMLDivElement>,
  canvasRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const { current: transformer } = transformerRef
    const { current: canvas } = canvasRef

    const coords = {
      x: transformer ? transformer.offsetLeft || 0 : 0,
      y: transformer ? transformer.offsetTop || 0 : 0
    }

    function changeCoords(x: number, y: number) {
      coords.x = x; coords.y = y;
      
      if (transformer && canvas) {
        transformer.style.transition = 'none'
        canvas.style.userSelect = 'none'
        canvas.style.cursor = 'grabbing'

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            transformer.style.left = coords.x + 'px'
            transformer.style.top = coords.y + 'px'
            transformer.style.transition = ''
          })
        })
      }
    }

    function mouseMoveHamdler(e: MouseEvent) {
      changeCoords(coords.x + e.movementX, coords.y + e.movementY)
    }

    function mouseDownHamdler() {
      document.addEventListener('mousemove', mouseMoveHamdler)
    }

    function mouseUpHamdler() {
      if (canvas) {
        canvas.style.userSelect = ''
        canvas.style.cursor = ''
      }

      document.removeEventListener('mousemove', mouseMoveHamdler)
    }

    if (canvas) {
      canvas.addEventListener('mousedown', mouseDownHamdler)
      document.addEventListener('mouseup', mouseUpHamdler)
    }

    return () => {
      document.removeEventListener('mousemove', mouseMoveHamdler)

      if (canvas) {
        canvas.removeEventListener('mousedown', mouseDownHamdler)
      }
    }
  }, [transformerRef, canvasRef])
}