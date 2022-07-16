class Square3 {

  private static max = 400;
  constructor(
    private width: number,
    private height: number,
    private bgc: string,
  ) {

  }

  draw() {
    const x = Math.random() * Square3.max;
    const sq = document.createElement('div');
    // set div styles

    const square = `<div style="position:relative; 
    left: ${x}px;
    top: ${x}px;
    width: ${this.width}px;
    height: ${this.height}px;
    background-color: ${this.bgc};"
    </div>`;

    // draw box
    document.body.insertAdjacentHTML('afterbegin', square); //child of body, adjcent to the end.
  }
}

const sq = new Square3(30, 30, 'red');
sq.draw()
sq.draw()
sq.draw()
sq.draw()
