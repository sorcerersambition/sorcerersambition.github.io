export default class{
	constructor(text,cb){
		let dialogueList = text
		let txt = new PIXI.Text("",{fontFamily : 'Mono', fontSize: 24, fill : 0xffffff,wordWrap:true,wordWrapWidth:666});
        txt.x = 26;
        txt.y = 412;
        battle.addChild(txt);
		let dialogue = -1;
            function txtAnim(text,callback){
        let total = "";
        let dia;
        if(text.indexOf(":") === -1) {dia = ["",text]} else{
        	dia = text.split(":");
    	}
        animate.addAsync(dia[1].length * 1 + 1,function(x,a){
            if(dia[1][x] === " "){
                a.tick(a)
            }
            else if(x % 1 === 0){
                txt.text = dia[0] + ":" + dia[1].substring(0,x / 1);
            }
        },callback)
    }
    function awaitEnter(){
        dialogue ++;
        txtAnim(dialogueList[dialogue],function(){
            if(dialogue === dialogueList.length - 1){
                animate.async = []
                txt.text = ""
                console.log("JESUS")
                cb()
            } else{
                key.waitDown(13,awaitEnter,false,true)
            }
        })
    }
    awaitEnter()
	}
}
