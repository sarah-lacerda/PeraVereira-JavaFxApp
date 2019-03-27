gdjs.ex3Code = {};
gdjs.ex3Code.GDbuttonNextObjects1= [];
gdjs.ex3Code.GDbuttonNextObjects2= [];
gdjs.ex3Code.GDbuttonBackObjects1= [];
gdjs.ex3Code.GDbuttonBackObjects2= [];
gdjs.ex3Code.GDtextObjects1= [];
gdjs.ex3Code.GDtextObjects2= [];
gdjs.ex3Code.GDperaObjects1= [];
gdjs.ex3Code.GDperaObjects2= [];
gdjs.ex3Code.GDperaSaysObjects1= [];
gdjs.ex3Code.GDperaSaysObjects2= [];
gdjs.ex3Code.GDtelaObjects1= [];
gdjs.ex3Code.GDtelaObjects2= [];
gdjs.ex3Code.GD1Objects1= [];
gdjs.ex3Code.GD1Objects2= [];
gdjs.ex3Code.GD2Objects1= [];
gdjs.ex3Code.GD2Objects2= [];
gdjs.ex3Code.GD3Objects1= [];
gdjs.ex3Code.GD3Objects2= [];
gdjs.ex3Code.GD4Objects1= [];
gdjs.ex3Code.GD4Objects2= [];
gdjs.ex3Code.GD5Objects1= [];
gdjs.ex3Code.GD5Objects2= [];
gdjs.ex3Code.GDp1Objects1= [];
gdjs.ex3Code.GDp1Objects2= [];
gdjs.ex3Code.GDp2Objects1= [];
gdjs.ex3Code.GDp2Objects2= [];
gdjs.ex3Code.GDp3Objects1= [];
gdjs.ex3Code.GDp3Objects2= [];
gdjs.ex3Code.GDp4Objects1= [];
gdjs.ex3Code.GDp4Objects2= [];
gdjs.ex3Code.GDp5Objects1= [];
gdjs.ex3Code.GDp5Objects2= [];

gdjs.ex3Code.conditionTrue_0 = {val:false};
gdjs.ex3Code.condition0IsTrue_0 = {val:false};
gdjs.ex3Code.condition1IsTrue_0 = {val:false};
gdjs.ex3Code.condition2IsTrue_0 = {val:false};
gdjs.ex3Code.condition3IsTrue_0 = {val:false};
gdjs.ex3Code.conditionTrue_1 = {val:false};
gdjs.ex3Code.condition0IsTrue_1 = {val:false};
gdjs.ex3Code.condition1IsTrue_1 = {val:false};
gdjs.ex3Code.condition2IsTrue_1 = {val:false};
gdjs.ex3Code.condition3IsTrue_1 = {val:false};


gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.ex3Code.GD1Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.ex3Code.GD2Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.ex3Code.GD3Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.ex3Code.GD4Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD5Objects1Objects = Hashtable.newFrom({"5": gdjs.ex3Code.GD5Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp1Objects1Objects = Hashtable.newFrom({"p1": gdjs.ex3Code.GDp1Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp2Objects1Objects = Hashtable.newFrom({"p2": gdjs.ex3Code.GDp2Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp3Objects1Objects = Hashtable.newFrom({"p3": gdjs.ex3Code.GDp3Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp4Objects1Objects = Hashtable.newFrom({"p4": gdjs.ex3Code.GDp4Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp5Objects1Objects = Hashtable.newFrom({"p5": gdjs.ex3Code.GDp5Objects1});gdjs.ex3Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.random(20));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.ex3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9873620);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.ex3Code.GD1Objects1 */
gdjs.ex3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex3Code.GD5Objects1.createFrom(runtimeScene.getObjects("5"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.ex3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD1Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD5Objects1[i].setOpacity(255);
}
}}

}


{

gdjs.ex3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7885644);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
/* Reuse gdjs.ex3Code.GD2Objects1 */
gdjs.ex3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex3Code.GD5Objects1.createFrom(runtimeScene.getObjects("5"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.ex3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD2Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD5Objects1[i].setOpacity(255);
}
}}

}


{

gdjs.ex3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8477948);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
/* Reuse gdjs.ex3Code.GD3Objects1 */
gdjs.ex3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex3Code.GD5Objects1.createFrom(runtimeScene.getObjects("5"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.ex3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD3Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD5Objects1[i].setOpacity(255);
}
}}

}


{

gdjs.ex3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7262764);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
/* Reuse gdjs.ex3Code.GD4Objects1 */
gdjs.ex3Code.GD5Objects1.createFrom(runtimeScene.getObjects("5"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}{for(var i = 0, len = gdjs.ex3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD4Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD5Objects1[i].setOpacity(255);
}
}}

}


{

gdjs.ex3Code.GD5Objects1.createFrom(runtimeScene.getObjects("5"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GD5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8452860);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
/* Reuse gdjs.ex3Code.GD5Objects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.ex3Code.GD5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD5Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD1Objects1[i].setOpacity(255);
}
}}

}


{

gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8470748);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.ex3Code.GDp1Objects1 */
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7396948);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
/* Reuse gdjs.ex3Code.GDp2Objects1 */
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(2);
}}

}


{

gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8467452);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
/* Reuse gdjs.ex3Code.GDp3Objects1 */
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(3);
}}

}


{

gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7252380);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
/* Reuse gdjs.ex3Code.GDp4Objects1 */
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(4);
}}

}


{

gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDp5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8451412);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
/* Reuse gdjs.ex3Code.GDp5Objects1 */
{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(5);
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
gdjs.ex3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
{runtimeScene.getVariables().getFromIndex(3).sub(1);
}{for(var i = 0, len = gdjs.ex3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
gdjs.ex3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
{runtimeScene.getVariables().getFromIndex(3).sub(1);
}{for(var i = 0, len = gdjs.ex3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
gdjs.ex3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
{runtimeScene.getVariables().getFromIndex(3).sub(1);
}{for(var i = 0, len = gdjs.ex3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
gdjs.ex3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
{runtimeScene.getVariables().getFromIndex(3).sub(1);
}{for(var i = 0, len = gdjs.ex3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
gdjs.ex3Code.GD5Objects1.createFrom(runtimeScene.getObjects("5"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{runtimeScene.getVariables().getFromIndex(3).sub(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.ex3Code.GD5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 0;
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
gdjs.ex3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex3Code.GD5Objects1.createFrom(runtimeScene.getObjects("5"));
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ex3Code.GD5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GD5Objects1[i].setOpacity(255);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 4;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 5;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 6;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 7;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 8;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 9;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 10;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 11;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 12;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 13;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 14;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 15;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 16;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 17;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 18;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 19;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 20;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));
gdjs.ex3Code.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));
gdjs.ex3Code.GDp3Objects1.createFrom(runtimeScene.getObjects("p3"));
gdjs.ex3Code.GDp4Objects1.createFrom(runtimeScene.getObjects("p4"));
gdjs.ex3Code.GDp5Objects1.createFrom(runtimeScene.getObjects("p5"));
{for(var i = 0, len = gdjs.ex3Code.GDp1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp1Objects1[i].setPosition(160,160);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp2Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp4Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex3Code.GDp5Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDp5Objects1[i].setPosition(160,646);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition1IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7884932);
}
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
gdjs.ex3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex3Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delay");
}{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaSaysObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setPosition(413,327);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "delay");
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "perguntaConsciencia", false);
}}

}


}; //End of gdjs.ex3Code.eventsList0xb25a8


gdjs.ex3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ex3Code.GDbuttonNextObjects1.length = 0;
gdjs.ex3Code.GDbuttonNextObjects2.length = 0;
gdjs.ex3Code.GDbuttonBackObjects1.length = 0;
gdjs.ex3Code.GDbuttonBackObjects2.length = 0;
gdjs.ex3Code.GDtextObjects1.length = 0;
gdjs.ex3Code.GDtextObjects2.length = 0;
gdjs.ex3Code.GDperaObjects1.length = 0;
gdjs.ex3Code.GDperaObjects2.length = 0;
gdjs.ex3Code.GDperaSaysObjects1.length = 0;
gdjs.ex3Code.GDperaSaysObjects2.length = 0;
gdjs.ex3Code.GDtelaObjects1.length = 0;
gdjs.ex3Code.GDtelaObjects2.length = 0;
gdjs.ex3Code.GD1Objects1.length = 0;
gdjs.ex3Code.GD1Objects2.length = 0;
gdjs.ex3Code.GD2Objects1.length = 0;
gdjs.ex3Code.GD2Objects2.length = 0;
gdjs.ex3Code.GD3Objects1.length = 0;
gdjs.ex3Code.GD3Objects2.length = 0;
gdjs.ex3Code.GD4Objects1.length = 0;
gdjs.ex3Code.GD4Objects2.length = 0;
gdjs.ex3Code.GD5Objects1.length = 0;
gdjs.ex3Code.GD5Objects2.length = 0;
gdjs.ex3Code.GDp1Objects1.length = 0;
gdjs.ex3Code.GDp1Objects2.length = 0;
gdjs.ex3Code.GDp2Objects1.length = 0;
gdjs.ex3Code.GDp2Objects2.length = 0;
gdjs.ex3Code.GDp3Objects1.length = 0;
gdjs.ex3Code.GDp3Objects2.length = 0;
gdjs.ex3Code.GDp4Objects1.length = 0;
gdjs.ex3Code.GDp4Objects2.length = 0;
gdjs.ex3Code.GDp5Objects1.length = 0;
gdjs.ex3Code.GDp5Objects2.length = 0;

gdjs.ex3Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ex3Code'] = gdjs.ex3Code;
