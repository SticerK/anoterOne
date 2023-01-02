export function animateField(className: string, ind: number): string {
  return `${className} .3s ease ${ind}s forwards`;
}

export function animateGraf(index: number, y: number = 0): object {
  return {
    height: `${index * 70}px`,
    transform: `translateY(${y * 70}px)`,
    transition: `transform .3s ease  ${index * 0.1}s`,
  };
}
