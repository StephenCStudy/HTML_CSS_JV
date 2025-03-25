for (let i = 0; i <=5; i++) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    console.log(`%cMau sac da duoc thay doi!`, `color: ${randomColor}; font-weight: bold;`);
}
