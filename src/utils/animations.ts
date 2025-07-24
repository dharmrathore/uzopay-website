import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Animation presets
export const fadeInUp = {
  opacity: 0,
  y: 60,
  duration: 0.8,
  ease: "power2.out"
};

export const fadeInLeft = {
  opacity: 0,
  x: -60,
  duration: 0.8,
  ease: "power2.out"
};

export const fadeInRight = {
  opacity: 0,
  x: 60,
  duration: 0.8,
  ease: "power2.out"
};

export const scaleIn = {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  ease: "back.out(1.7)"
};

export const staggerContainer = {
  stagger: 0.1,
  delay: 0.2
};

// Hero animations
export const heroAnimations = () => {
  const tl = gsap.timeline();
  
  tl.from('.hero-label', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  })
  .from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  }, "-=0.4")
  .from('.hero-description', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6")
  .from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4")
  .from('.hero-robot', {
    opacity: 0,
    scale: 0.8,
    rotation: 10,
    duration: 1.2,
    ease: "back.out(1.7)"
  }, "-=0.8")
  .from('.floating-label', {
    opacity: 0,
    scale: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "back.out(1.7)"
  }, "-=0.4");
  
  return tl;
};

// Scroll-triggered animations
export const scrollAnimations = () => {
  // Fade in up animations
  gsap.utils.toArray('.animate-fade-in-up').forEach((element: any) => {
    gsap.fromTo(element, 
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Fade in left animations
  gsap.utils.toArray('.animate-fade-in-left').forEach((element: any) => {
    gsap.fromTo(element, 
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Fade in right animations
  gsap.utils.toArray('.animate-fade-in-right').forEach((element: any) => {
    gsap.fromTo(element, 
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Scale in animations
  gsap.utils.toArray('.animate-scale-in').forEach((element: any) => {
    gsap.fromTo(element, 
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Stagger animations
  gsap.utils.toArray('.animate-stagger').forEach((container: any) => {
    const elements = container.querySelectorAll('.stagger-item');
    gsap.fromTo(elements, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

// Parallax effects
export const parallaxEffects = () => {
  gsap.utils.toArray('.parallax').forEach((element: any) => {
    gsap.to(element, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
};

// Text reveal animations
export const textReveal = (element: string) => {
  gsap.fromTo(element, 
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Initialize all animations
export const initAnimations = () => {
  // Set default ease
  gsap.defaults({ ease: "power2.out" });
  
  // Initialize scroll animations
  scrollAnimations();
  
  // Initialize parallax effects
  parallaxEffects();
  
  // Hero animations
  heroAnimations();
};

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}; 