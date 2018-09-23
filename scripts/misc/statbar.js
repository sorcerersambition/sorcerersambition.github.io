export default class{
    constructor(fills,max,starts,shades,bodys,ends){
        this.sprite = new PIXI.Container();
        

        let body = new PIXI.Sprite(bodys)
        body.x = 28;
        body.width = max + 2;
        this.sprite.addChild(body);

        this.fill = new PIXI.Sprite(shades)
        this.fill.x = 28;
        this.fill.y = 10;
        this.fill.width = fills + 4;
        this.sprite.addChild(this.fill);

        let end = new PIXI.Sprite(ends)
        end.x = max - 2 + 30;
        this.sprite.addChild(end);

        this.sprite.addChild(new PIXI.Sprite(starts))
    }
}