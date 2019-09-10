const mockAPI = () => {
  const paintingStyles = [
    "Baroque",
    "Impressionism",
    "Cubism",
    "Expressionism",
    "Surrealism",
    "Pointillism",
    "Futurism",
    "Pop art",
  ];

  return paintingStyles[Math.floor(Math.random() * paintingStyles.length)];
}

export default mockAPI;