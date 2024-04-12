'use client'
import { useEffect } from "react"

export const useObserver = ({
    target,
    root=null,
    rootMargin = "0px",
    threshold = 0.1,
    onIntersect,
}: {
    target: React.RefObject<HTMLElement>,
    root?: Element | null,
    rootMargin?: string,
    threshold?: number,
    onIntersect: IntersectionObserverCallback,
}) => {
    useEffect(() => {
        let observer:any;

        if(target && target.current) {
            observer = new IntersectionObserver(onIntersect, {
                root,
                rootMargin,
                threshold,
            })
            observer.observe(target.current)
        }
        return() => observer && observer.disconnect()
    }, [target, rootMargin, threshold])
}