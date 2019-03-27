gdjs.A1Code = {};
gdjs.A1Code.GD1Objects1_1final = [];

gdjs.A1Code.GD2Objects1_1final = [];

gdjs.A1Code.GD4Objects1_1final = [];

gdjs.A1Code.GDforwardButtonObjects1= [];
gdjs.A1Code.GDforwardButtonObjects2= [];
gdjs.A1Code.GDbackButtonObjects1= [];
gdjs.A1Code.GDbackButtonObjects2= [];
gdjs.A1Code.GDperaObjects1= [];
gdjs.A1Code.GDperaObjects2= [];
gdjs.A1Code.GDperaSaysObjects1= [];
gdjs.A1Code.GDperaSaysObjects2= [];
gdjs.A1Code.GDtextoObjects1= [];
gdjs.A1Code.GDtextoObjects2= [];
gdjs.A1Code.GDvoltarAoTxtObjects1= [];
gdjs.A1Code.GDvoltarAoTxtObjects2= [];
gdjs.A1Code.GDvoltarAtivObjects1= [];
gdjs.A1Code.GDvoltarAtivObjects2= [];
gdjs.A1Code.GDtelaObjects1= [];
gdjs.A1Code.GDtelaObjects2= [];
gdjs.A1Code.GDEObjects1= [];
gdjs.A1Code.GDEObjects2= [];
gdjs.A1Code.GDDObjects1= [];
gdjs.A1Code.GDDObjects2= [];
gdjs.A1Code.GDCObjects1= [];
gdjs.A1Code.GDCObjects2= [];
gdjs.A1Code.GDBObjects1= [];
gdjs.A1Code.GDBObjects2= [];
gdjs.A1Code.GDAObjects1= [];
gdjs.A1Code.GDAObjects2= [];
gdjs.A1Code.GD1Objects1= [];
gdjs.A1Code.GD1Objects2= [];
gdjs.A1Code.GD2Objects1= [];
gdjs.A1Code.GD2Objects2= [];
gdjs.A1Code.GD3Objects1= [];
gdjs.A1Code.GD3Objects2= [];
gdjs.A1Code.GD4Objects1= [];
gdjs.A1Code.GD4Objects2= [];
gdjs.A1Code.GD5Objects1= [];
gdjs.A1Code.GD5Objects2= [];
gdjs.A1Code.GDareaObjects1= [];
gdjs.A1Code.GDareaObjects2= [];

gdjs.A1Code.conditionTrue_0 = {val:false};
gdjs.A1Code.condition0IsTrue_0 = {val:false};
gdjs.A1Code.condition1IsTrue_0 = {val:false};
gdjs.A1Code.condition2IsTrue_0 = {val:false};
gdjs.A1Code.condition3IsTrue_0 = {val:false};
gdjs.A1Code.conditionTrue_1 = {val:false};
gdjs.A1Code.condition0IsTrue_1 = {val:false};
gdjs.A1Code.condition1IsTrue_1 = {val:false};
gdjs.A1Code.condition2IsTrue_1 = {val:false};
gdjs.A1Code.condition3IsTrue_1 = {val:false};


gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A1Code.GD3Objects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD2Objects2Objects = Hashtable.newFrom({"2": gdjs.A1Code.GD2Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects2Objects = Hashtable.newFrom({"4": gdjs.A1Code.GD4Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.A1Code.GD1Objects2});gdjs.A1Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getVariables().get("selection").setNumber(gdjs.random(6));
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
gdjs.A1Code.condition2IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition1IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition2IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8441604);
}
}}
}
if (gdjs.A1Code.condition2IsTrue_0.val) {
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}}

}


{

gdjs.A1Code.GD1Objects1.length = 0;

gdjs.A1Code.GD2Objects1.length = 0;

gdjs.A1Code.GD4Objects1.length = 0;


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.GD1Objects1_1final.length = 0;gdjs.A1Code.GD2Objects1_1final.length = 0;gdjs.A1Code.GD4Objects1_1final.length = 0;gdjs.A1Code.condition0IsTrue_1.val = false;
gdjs.A1Code.condition1IsTrue_1.val = false;
gdjs.A1Code.condition2IsTrue_1.val = false;
{
gdjs.A1Code.GD2Objects2.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD2Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition0IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD2Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD2Objects1_1final.indexOf(gdjs.A1Code.GD2Objects2[j]) === -1 )
            gdjs.A1Code.GD2Objects1_1final.push(gdjs.A1Code.GD2Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD4Objects2.createFrom(runtimeScene.getObjects("4"));
gdjs.A1Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition1IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD4Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD4Objects1_1final.indexOf(gdjs.A1Code.GD4Objects2[j]) === -1 )
            gdjs.A1Code.GD4Objects1_1final.push(gdjs.A1Code.GD4Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition2IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD1Objects1_1final.indexOf(gdjs.A1Code.GD1Objects2[j]) === -1 )
            gdjs.A1Code.GD1Objects1_1final.push(gdjs.A1Code.GD1Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD1Objects1.createFrom(gdjs.A1Code.GD1Objects1_1final);
gdjs.A1Code.GD2Objects1.createFrom(gdjs.A1Code.GD2Objects1_1final);
gdjs.A1Code.GD4Objects1.createFrom(gdjs.A1Code.GD4Objects1_1final);
}
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A1", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


{
}

}


}; //End of gdjs.A1Code.eventsList0xb25a8


gdjs.A1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.A1Code.GDforwardButtonObjects1.length = 0;
gdjs.A1Code.GDforwardButtonObjects2.length = 0;
gdjs.A1Code.GDbackButtonObjects1.length = 0;
gdjs.A1Code.GDbackButtonObjects2.length = 0;
gdjs.A1Code.GDperaObjects1.length = 0;
gdjs.A1Code.GDperaObjects2.length = 0;
gdjs.A1Code.GDperaSaysObjects1.length = 0;
gdjs.A1Code.GDperaSaysObjects2.length = 0;
gdjs.A1Code.GDtextoObjects1.length = 0;
gdjs.A1Code.GDtextoObjects2.length = 0;
gdjs.A1Code.GDvoltarAoTxtObjects1.length = 0;
gdjs.A1Code.GDvoltarAoTxtObjects2.length = 0;
gdjs.A1Code.GDvoltarAtivObjects1.length = 0;
gdjs.A1Code.GDvoltarAtivObjects2.length = 0;
gdjs.A1Code.GDtelaObjects1.length = 0;
gdjs.A1Code.GDtelaObjects2.length = 0;
gdjs.A1Code.GDEObjects1.length = 0;
gdjs.A1Code.GDEObjects2.length = 0;
gdjs.A1Code.GDDObjects1.length = 0;
gdjs.A1Code.GDDObjects2.length = 0;
gdjs.A1Code.GDCObjects1.length = 0;
gdjs.A1Code.GDCObjects2.length = 0;
gdjs.A1Code.GDBObjects1.length = 0;
gdjs.A1Code.GDBObjects2.length = 0;
gdjs.A1Code.GDAObjects1.length = 0;
gdjs.A1Code.GDAObjects2.length = 0;
gdjs.A1Code.GD1Objects1.length = 0;
gdjs.A1Code.GD1Objects2.length = 0;
gdjs.A1Code.GD2Objects1.length = 0;
gdjs.A1Code.GD2Objects2.length = 0;
gdjs.A1Code.GD3Objects1.length = 0;
gdjs.A1Code.GD3Objects2.length = 0;
gdjs.A1Code.GD4Objects1.length = 0;
gdjs.A1Code.GD4Objects2.length = 0;
gdjs.A1Code.GD5Objects1.length = 0;
gdjs.A1Code.GD5Objects2.length = 0;
gdjs.A1Code.GDareaObjects1.length = 0;
gdjs.A1Code.GDareaObjects2.length = 0;

gdjs.A1Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A1Code'] = gdjs.A1Code;
