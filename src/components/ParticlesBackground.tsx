'use client';

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fpsLimit: 120,
        fullScreen: false,
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            direction: "none",
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.2,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 2 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.5,
              sync: false
            }
          },
          collisions: {
            enable: false
          }
        },
        detectRetina: true,
        background: {
          color: "transparent"
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.3
              }
            }
          }
        }
      }}
    />
  );
};

export default ParticlesBackground; 