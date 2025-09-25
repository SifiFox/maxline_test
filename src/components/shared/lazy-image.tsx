import { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback?: string;
  threshold?: number;
  rootMargin?: string;
}

export function LazyImage({
  src,
  fallback = '',
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
  alt = '',
  ...props
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(fallback);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = new Image();
              img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
              };
              img.src = src;
              observer.unobserve(imgElement);
            }
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(imgElement);

      return () => observer.unobserve(imgElement);
    } else {
      setImageSrc(src);
      setIsLoaded(true);
    }
  }, [src, threshold, rootMargin]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-70'
      } ${className}`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
