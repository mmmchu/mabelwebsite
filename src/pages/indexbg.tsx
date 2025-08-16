
import { useEffect, useState } from "react";

export default function IndexBg() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Nebula Background Base */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Nebula clouds */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(75, 0, 130, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 70%, rgba(25, 25, 112, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 80%, rgba(72, 61, 139, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 10% 80%, rgba(106, 90, 205, 0.3) 0%, transparent 50%)
            `,
            animation: "nebulaShift 20s ease-in-out infinite alternate",
          }}
        />

        {/* Twinkling Stars Field */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}

        {/* Bright constellation stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`bright-star-${i}`}
            className="absolute rounded-full bg-white shadow-lg"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `brightTwinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`meteor-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `meteor ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)",
            }}
          />
        ))}

        {/* Floating stardust particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-white/40 to-blue-200/40"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Interactive mouse followers with nebula effect */}
        <div
          className="absolute w-20 h-20 rounded-full pointer-events-none"
          style={{
            left: `${mousePosition.x - 40}px`,
            top: `${mousePosition.y - 40}px`,
            background: "radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%)",
            transition: "all 0.3s ease",
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full pointer-events-none"
          style={{
            left: `${mousePosition.x / 1.5 - 64}px`,
            top: `${mousePosition.y / 1.5 - 64}px`,
            background: "radial-gradient(circle, rgba(75, 0, 130, 0.08) 0%, transparent 70%)",
            transition: "all 0.6s ease",
          }}
        />

        {/* Cosmic dust clouds */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(${Math.random() > 0.5 ? '138, 43, 226' : '75, 0, 130'}, 0.2) 0%, transparent 70%)`,
              animation: `drift ${15 + Math.random() * 10}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes brightTwinkle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes meteor {
          0% { 
            transform: translateX(-100px) translateY(-100px) rotate(45deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateX(300px) translateY(300px) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-40px) translateX(-5px); opacity: 0.8; }
          75% { transform: translateY(-20px) translateX(-10px); opacity: 0.6; }
        }
        
        @keyframes drift {
          0% { transform: translateX(0px) translateY(0px) scale(1); }
          33% { transform: translateX(30px) translateY(-20px) scale(1.1); }
          66% { transform: translateX(-20px) translateY(30px) scale(0.9); }
          100% { transform: translateX(0px) translateY(0px) scale(1); }
        }
        
        @keyframes nebulaShift {
          0% { 
            transform: scale(1) rotate(0deg);
            filter: hue-rotate(0deg);
          }
          50% { 
            transform: scale(1.1) rotate(0.5deg);
            filter: hue-rotate(30deg);
          }
          100% { 
            transform: scale(1) rotate(0deg);
            filter: hue-rotate(0deg);
          }
        }
      `}</style>
    </>
  );
}
