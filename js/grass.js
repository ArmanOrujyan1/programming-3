let LivingCreature = require('./LivingCreature')
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 17;
    }
    mul() {
        this.energy++;
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 15) {
            let x = exact[0];
            let y = exact[1];

            let grass = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(grass);

            this.energy = 15;
        }
    }
}