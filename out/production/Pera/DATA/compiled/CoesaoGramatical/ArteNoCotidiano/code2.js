gdjs.A1Code = {};
gdjs.A1Code.GD1Objects1_1final = [];

gdjs.A1Code.GD2Objects1_1final = [];

gdjs.A1Code.GD3Objects1_1final = [];

gdjs.A1Code.GD4Objects1_1final = [];

gdjs.A1Code.GDforwardButtonObjects1= [];
gdjs.A1Code.GDforwardButtonObjects2= [];
gdjs.A1Code.GDbackButtonObjects1= [];
gdjs.A1Code.GDbackButtonObjects2= [];
gdjs.A1Code.GDperaObjects1= [];
gdjs.A1Code.GDperaObjects2= [];
gdjs.A1Code.GDperaSaysObjects1= [];
gdjs.A1Code.GDperaSaysObjects2= [];
gdjs.A1Code.GDtelaObjects1= [];
gdjs.A1Code.GDtelaObjects2= [];
gdjs.A1Code.GD1Objects1= [];
gdjs.A1Code.GD1Objects2= [];
gdjs.A1Code.GD2Objects1= [];
gdjs.A1Code.GD2Objects2= [];
gdjs.A1Code.GD3Objects1= [];
gdjs.A1Code.GD3Objects2= [];
gdjs.A1Code.GD4Objects1= [];
gdjs.A1Code.GD4Objects2= [];
gdjs.A1Code.GDretanguloObjects1= [];
gdjs.A1Code.GDretanguloObjects2= [];

gdjs.A1Code.conditionTrue_0 = {val:false};
gdjs.A1Code.condition0IsTrue_0 = {val:false};
gdjs.A1Code.condition1IsTrue_0 = {val:false};
gdjs.A1Code.condition2IsTrue_0 = {val:false};
gdjs.A1Code.condition3IsTrue_0 = {val:false};
gdjs.A1Code.condition4IsTrue_0 = {val:false};
gdjs.A1Code.conditionTrue_1 = {val:false};
gdjs.A1Code.condition0IsTrue_1 = {val:false};
gdjs.A1Code.condition1IsTrue_1 = {val:false};
gdjs.A1Code.condition2IsTrue_1 = {val:false};
gdjs.A1Code.condition3IsTrue_1 = {val:false};
gdjs.A1Code.condition4IsTrue_1 = {val:false};


gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.A1Code.GD1Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD2Objects2Objects = Hashtable.newFrom({"2": gdjs.A1Code.GD2Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD3Objects2Objects = Hashtable.newFrom({"3": gdjs.A1Code.GD3Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects2Objects = Hashtable.newFrom({"4": gdjs.A1Code.GD4Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDretanguloObjects1Objects = Hashtable.newFrom({"retangulo": gdjs.A1Code.GDretanguloObjects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A1Code.GD4Objects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDretanguloObjects1Objects = Hashtable.newFrom({"retangulo": gdjs.A1Code.GDretanguloObjects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A1Code.GD4Objects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDretanguloObjects1Objects = Hashtable.newFrom({"retangulo": gdjs.A1Code.GDretanguloObjects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A1Code.GD4Objects1});gdjs.A1Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "timerToNextScene");
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}}

}


{

gdjs.A1Code.GD1Objects1.length = 0;

gdjs.A1Code.GD2Objects1.length = 0;

gdjs.A1Code.GD3Objects1.length = 0;

gdjs.A1Code.GD4Objects1.length = 0;


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
gdjs.A1Code.condition2IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.GD1Objects1_1final.length = 0;gdjs.A1Code.GD2Objects1_1final.length = 0;gdjs.A1Code.GD3Objects1_1final.length = 0;gdjs.A1Code.GD4Objects1_1final.length = 0;gdjs.A1Code.condition0IsTrue_1.val = false;
gdjs.A1Code.condition1IsTrue_1.val = false;
gdjs.A1Code.condition2IsTrue_1.val = false;
gdjs.A1Code.condition3IsTrue_1.val = false;
{
gdjs.A1Code.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition0IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD1Objects1_1final.indexOf(gdjs.A1Code.GD1Objects2[j]) === -1 )
            gdjs.A1Code.GD1Objects1_1final.push(gdjs.A1Code.GD1Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD2Objects2.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD2Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition1IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD2Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD2Objects1_1final.indexOf(gdjs.A1Code.GD2Objects2[j]) === -1 )
            gdjs.A1Code.GD2Objects1_1final.push(gdjs.A1Code.GD2Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD3Objects2.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD3Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition2IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD3Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD3Objects1_1final.indexOf(gdjs.A1Code.GD3Objects2[j]) === -1 )
            gdjs.A1Code.GD3Objects1_1final.push(gdjs.A1Code.GD3Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD4Objects2.createFrom(runtimeScene.getObjects("4"));
gdjs.A1Code.condition3IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition3IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD4Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD4Objects1_1final.indexOf(gdjs.A1Code.GD4Objects2[j]) === -1 )
            gdjs.A1Code.GD4Objects1_1final.push(gdjs.A1Code.GD4Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD1Objects1.createFrom(gdjs.A1Code.GD1Objects1_1final);
gdjs.A1Code.GD2Objects1.createFrom(gdjs.A1Code.GD2Objects1_1final);
gdjs.A1Code.GD3Objects1.createFrom(gdjs.A1Code.GD3Objects1_1final);
gdjs.A1Code.GD4Objects1.createFrom(gdjs.A1Code.GD4Objects1_1final);
}
}
}if ( gdjs.A1Code.condition1IsTrue_0.val ) {
{
gdjs.A1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
}
if (gdjs.A1Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A1", false);
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

gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.A1Code.GDretanguloObjects1.createFrom(runtimeScene.getObjects("retangulo"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDretanguloObjects1Objects, gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A1Code.GD4Objects1 */
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(384,352);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.A1Code.GDretanguloObjects1.createFrom(runtimeScene.getObjects("retangulo"));

gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDretanguloObjects1Objects, gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects1Objects, false, runtimeScene, false);
}if (gdjs.A1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.A1Code.GDretanguloObjects1.createFrom(runtimeScene.getObjects("retangulo"));

gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDretanguloObjects1Objects, gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects1Objects, true, runtimeScene, false);
}if (gdjs.A1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8289796);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(96,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(704,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(96,608);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(704,608);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9474012);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(96,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(704,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(96,608);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(704,608);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6681740);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(96,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(704,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(96,608);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(704,608);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9987244);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(96,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(704,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(96,608);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(704,608);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6850124);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(96,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(704,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(96,608);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(704,608);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8440548);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(96,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(704,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(96,608);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(704,608);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8441684);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(96,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(704,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(96,608);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(704,608);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.random(6));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

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
gdjs.A1Code.GDtelaObjects1.length = 0;
gdjs.A1Code.GDtelaObjects2.length = 0;
gdjs.A1Code.GD1Objects1.length = 0;
gdjs.A1Code.GD1Objects2.length = 0;
gdjs.A1Code.GD2Objects1.length = 0;
gdjs.A1Code.GD2Objects2.length = 0;
gdjs.A1Code.GD3Objects1.length = 0;
gdjs.A1Code.GD3Objects2.length = 0;
gdjs.A1Code.GD4Objects1.length = 0;
gdjs.A1Code.GD4Objects2.length = 0;
gdjs.A1Code.GDretanguloObjects1.length = 0;
gdjs.A1Code.GDretanguloObjects2.length = 0;

gdjs.A1Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A1Code'] = gdjs.A1Code;
