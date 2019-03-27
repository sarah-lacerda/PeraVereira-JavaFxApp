gdjs.A1Code = {};
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

gdjs.A1Code.conditionTrue_0 = {val:false};
gdjs.A1Code.condition0IsTrue_0 = {val:false};
gdjs.A1Code.condition1IsTrue_0 = {val:false};
gdjs.A1Code.condition2IsTrue_0 = {val:false};
gdjs.A1Code.conditionTrue_1 = {val:false};
gdjs.A1Code.condition0IsTrue_1 = {val:false};
gdjs.A1Code.condition1IsTrue_1 = {val:false};
gdjs.A1Code.condition2IsTrue_1 = {val:false};


gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A1Code.GD1Objects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.A1Code.GD2Objects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A1Code.GD3Objects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A1Code.GD4Objects1});gdjs.A1Code.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.A1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.A1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrongTimer");
}}

}


{

gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.A1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.A1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrongTimer");
}}

}


{

gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.A1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.A1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrongTimer");
}}

}


{

gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.A1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaSaysObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A2", false);
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "wrongTimer");
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9474692);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.A1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaSaysObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 11;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(32,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(32,320);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(32,480);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.random(11));
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

gdjs.A1Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A1Code'] = gdjs.A1Code;
