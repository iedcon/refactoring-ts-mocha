interface Vector1D {
  x: number;
}

interface Vector2D extends Vector1D {
  y: number;
}

interface Rectangle {
  width: number;
  height: number;
}

interface Color {
  color: string;
}

type ColoredRectangle = Rectangle | Color;

const r: ColoredRectangle = {
  width: 10,
  height: 10,
  color: 'black',
};

const v = { x: 1, y: 1 };
const v1: Vector1D = v;
console.log(v1);
