export const cubeData = Array.from({ length: 40 }, (_, k) => {
  const randomRadius = Math.random() * 5 + 5;
  const randomAngle = Math.random() * Math.PI * 2;
  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = (Math.random() - 0.5) * 10;

  return {
    idx: k,
    position: [x, y, z] as [number, number, number],
    color: k % 2 === 0 ? "#7C3AED" : "#C084FC",
    size: Math.random() * 0.5 + 0.2,
    speed: Math.random() * 0.2 + 0.1,
  };
});
