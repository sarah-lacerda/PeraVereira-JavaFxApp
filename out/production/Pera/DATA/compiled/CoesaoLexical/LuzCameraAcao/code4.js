gdjs.A3Code = {};
gdjs.A3Code.GDforwardButtonObjects1= [];
gdjs.A3Code.GDforwardButtonObjects2= [];
gdjs.A3Code.GDbackButtonObjects1= [];
gdjs.A3Code.GDbackButtonObjects2= [];
gdjs.A3Code.GDperaObjects1= [];
gdjs.A3Code.GDperaObjects2= [];
gdjs.A3Code.GDperaSaysObjects1= [];
gdjs.A3Code.GDperaSaysObjects2= [];
gdjs.A3Code.GDvoltarAoTxtObjects1= [];
gdjs.A3Code.GDvoltarAoTxtObjects2= [];
gdjs.A3Code.GDtextoObjects1= [];
gdjs.A3Code.GDtextoObjects2= [];
gdjs.A3Code.GDvoltarAtivObjects1= [];
gdjs.A3Code.GDvoltarAtivObjects2= [];
gdjs.A3Code.GDtelaObjects1= [];
gdjs.A3Code.GDtelaObjects2= [];
gdjs.A3Code.GD1Objects1= [];
gdjs.A3Code.GD1Objects2= [];
gdjs.A3Code.GD2Objects1= [];
gdjs.A3Code.GD2Objects2= [];
gdjs.A3Code.GD3Objects1= [];
gdjs.A3Code.GD3Objects2= [];
gdjs.A3Code.GD4Objects1= [];
gdjs.A3Code.GD4Objects2= [];
gdjs.A3Code.GDareaObjects1= [];
gdjs.A3Code.GDareaObjects2= [];
gdjs.A3Code.GDDObjects1= [];
gdjs.A3Code.GDDObjects2= [];
gdjs.A3Code.GDCObjects1= [];
gdjs.A3Code.GDCObjects2= [];
gdjs.A3Code.GDBObjects1= [];
gdjs.A3Code.GDBObjects2= [];
gdjs.A3Code.GDAObjects1= [];
gdjs.A3Code.GDAObjects2= [];

gdjs.A3Code.conditionTrue_0 = {val:false};
gdjs.A3Code.condition0IsTrue_0 = {val:false};
gdjs.A3Code.condition1IsTrue_0 = {val:false};
gdjs.A3Code.condition2IsTrue_0 = {val:false};
gdjs.A3Code.condition3IsTrue_0 = {val:false};
gdjs.A3Code.conditionTrue_1 = {val:false};
gdjs.A3Code.condition0IsTrue_1 = {val:false};
gdjs.A3Code.condition1IsTrue_1 = {val:false};
gdjs.A3Code.condition2IsTrue_1 = {val:false};
gdjs.A3Code.condition3IsTrue_1 = {val:false};


gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDareaObjects1Objects = Hashtable.newFrom({"area": gdjs.A3Code.GDareaObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A3Code.GD1Objects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDareaObjects1Objects = Hashtable.newFrom({"area": gdjs.A3Code.GDareaObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A3Code.GD1Objects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDAObjects1Objects = Hashtable.newFrom({"A": gdjs.A3Code.GDAObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A3Code.GD3Objects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDBObjects1Objects = Hashtable.newFrom({"B": gdjs.A3Code.GDBObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A3Code.GD1Objects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDCObjects1Objects = Hashtable.newFrom({"C": gdjs.A3Code.GDCObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.A3Code.GD2Objects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDDObjects1Objects = Hashtable.newFrom({"D": gdjs.A3Code.GDDObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A3Code.GD4Objects1});gdjs.A3Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A3Code.condition0IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A3Code.condition0IsTrue_0.val) {
gdjs.A3Code.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}{runtimeScene.getVariables().get("selection").setNumber(gdjs.random(3));
}{for(var i = 0, len = gdjs.A3Code.GDareaObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDareaObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 0;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8308676);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(416,192);
}
}{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(416,288);
}
}{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(416,384);
}
}{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(416,480);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 1;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8613436);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(416,192);
}
}{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(416,288);
}
}{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(416,384);
}
}{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(416,480);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 2;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9982196);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(416,192);
}
}{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(416,288);
}
}{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(416,384);
}
}{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(416,480);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 3;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6844652);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(416,192);
}
}{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(416,288);
}
}{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(416,384);
}
}{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(416,480);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 0;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7462908);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GDAObjects1.createFrom(runtimeScene.getObjects("A"));
gdjs.A3Code.GDBObjects1.createFrom(runtimeScene.getObjects("B"));
gdjs.A3Code.GDCObjects1.createFrom(runtimeScene.getObjects("C"));
gdjs.A3Code.GDDObjects1.createFrom(runtimeScene.getObjects("D"));
{for(var i = 0, len = gdjs.A3Code.GDAObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDAObjects1[i].setPosition(96,192);
}
}{for(var i = 0, len = gdjs.A3Code.GDBObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDBObjects1[i].setPosition(96,288);
}
}{for(var i = 0, len = gdjs.A3Code.GDCObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDCObjects1[i].setPosition(96,384);
}
}{for(var i = 0, len = gdjs.A3Code.GDDObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDDObjects1[i].setPosition(96,480);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 1;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9600692);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GDAObjects1.createFrom(runtimeScene.getObjects("A"));
gdjs.A3Code.GDBObjects1.createFrom(runtimeScene.getObjects("B"));
gdjs.A3Code.GDCObjects1.createFrom(runtimeScene.getObjects("C"));
gdjs.A3Code.GDDObjects1.createFrom(runtimeScene.getObjects("D"));
{for(var i = 0, len = gdjs.A3Code.GDDObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDDObjects1[i].setPosition(96,192);
}
}{for(var i = 0, len = gdjs.A3Code.GDCObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDCObjects1[i].setPosition(96,288);
}
}{for(var i = 0, len = gdjs.A3Code.GDBObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDBObjects1[i].setPosition(96,384);
}
}{for(var i = 0, len = gdjs.A3Code.GDAObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDAObjects1[i].setPosition(96,480);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 2;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8717172);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GDAObjects1.createFrom(runtimeScene.getObjects("A"));
gdjs.A3Code.GDBObjects1.createFrom(runtimeScene.getObjects("B"));
gdjs.A3Code.GDCObjects1.createFrom(runtimeScene.getObjects("C"));
gdjs.A3Code.GDDObjects1.createFrom(runtimeScene.getObjects("D"));
{for(var i = 0, len = gdjs.A3Code.GDBObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDBObjects1[i].setPosition(96,192);
}
}{for(var i = 0, len = gdjs.A3Code.GDAObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDAObjects1[i].setPosition(96,288);
}
}{for(var i = 0, len = gdjs.A3Code.GDDObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDDObjects1[i].setPosition(96,384);
}
}{for(var i = 0, len = gdjs.A3Code.GDCObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDCObjects1[i].setPosition(96,480);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 3;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8718292);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GDAObjects1.createFrom(runtimeScene.getObjects("A"));
gdjs.A3Code.GDBObjects1.createFrom(runtimeScene.getObjects("B"));
gdjs.A3Code.GDCObjects1.createFrom(runtimeScene.getObjects("C"));
gdjs.A3Code.GDDObjects1.createFrom(runtimeScene.getObjects("D"));
{for(var i = 0, len = gdjs.A3Code.GDCObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDCObjects1[i].setPosition(96,192);
}
}{for(var i = 0, len = gdjs.A3Code.GDDObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDDObjects1[i].setPosition(96,288);
}
}{for(var i = 0, len = gdjs.A3Code.GDAObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDAObjects1[i].setPosition(96,384);
}
}{for(var i = 0, len = gdjs.A3Code.GDBObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDBObjects1[i].setPosition(96,480);
}
}}

}


{

gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));

gdjs.A3Code.condition0IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDareaObjects1Objects, gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD1Objects1Objects, false, runtimeScene, false);
}if (gdjs.A3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));

gdjs.A3Code.condition0IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDareaObjects1Objects, gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD1Objects1Objects, true, runtimeScene, false);
}if (gdjs.A3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GDAObjects1.createFrom(runtimeScene.getObjects("A"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
gdjs.A3Code.condition2IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDAObjects1Objects, gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD3Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A3Code.condition1IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition2IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9847348);
}
}}
}
if (gdjs.A3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.A3Code.GD3Objects1 */
/* Reuse gdjs.A3Code.GDAObjects1 */
{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.A3Code.GDAObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDAObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GDBObjects1.createFrom(runtimeScene.getObjects("B"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
gdjs.A3Code.condition2IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDBObjects1Objects, gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A3Code.condition1IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition2IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6817148);
}
}}
}
if (gdjs.A3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.A3Code.GD1Objects1 */
/* Reuse gdjs.A3Code.GDBObjects1 */
{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.A3Code.GDBObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDBObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GDCObjects1.createFrom(runtimeScene.getObjects("C"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
gdjs.A3Code.condition2IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDCObjects1Objects, gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A3Code.condition1IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition2IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6818284);
}
}}
}
if (gdjs.A3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.A3Code.GD2Objects1 */
/* Reuse gdjs.A3Code.GDCObjects1 */
{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.A3Code.GDCObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDCObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.A3Code.GDDObjects1.createFrom(runtimeScene.getObjects("D"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
gdjs.A3Code.condition2IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDDObjects1Objects, gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD4Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A3Code.condition1IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition2IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7315404);
}
}}
}
if (gdjs.A3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.A3Code.GD4Objects1 */
/* Reuse gdjs.A3Code.GDDObjects1 */
{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.A3Code.GDDObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDDObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.A3Code.condition0IsTrue_0.val) {
gdjs.A3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if (gdjs.A3Code.condition0IsTrue_0.val) {
gdjs.A3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}{for(var i = 0, len = gdjs.A3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDperaObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.A3Code.eventsList0xb25a8


gdjs.A3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.A3Code.GDforwardButtonObjects1.length = 0;
gdjs.A3Code.GDforwardButtonObjects2.length = 0;
gdjs.A3Code.GDbackButtonObjects1.length = 0;
gdjs.A3Code.GDbackButtonObjects2.length = 0;
gdjs.A3Code.GDperaObjects1.length = 0;
gdjs.A3Code.GDperaObjects2.length = 0;
gdjs.A3Code.GDperaSaysObjects1.length = 0;
gdjs.A3Code.GDperaSaysObjects2.length = 0;
gdjs.A3Code.GDvoltarAoTxtObjects1.length = 0;
gdjs.A3Code.GDvoltarAoTxtObjects2.length = 0;
gdjs.A3Code.GDtextoObjects1.length = 0;
gdjs.A3Code.GDtextoObjects2.length = 0;
gdjs.A3Code.GDvoltarAtivObjects1.length = 0;
gdjs.A3Code.GDvoltarAtivObjects2.length = 0;
gdjs.A3Code.GDtelaObjects1.length = 0;
gdjs.A3Code.GDtelaObjects2.length = 0;
gdjs.A3Code.GD1Objects1.length = 0;
gdjs.A3Code.GD1Objects2.length = 0;
gdjs.A3Code.GD2Objects1.length = 0;
gdjs.A3Code.GD2Objects2.length = 0;
gdjs.A3Code.GD3Objects1.length = 0;
gdjs.A3Code.GD3Objects2.length = 0;
gdjs.A3Code.GD4Objects1.length = 0;
gdjs.A3Code.GD4Objects2.length = 0;
gdjs.A3Code.GDareaObjects1.length = 0;
gdjs.A3Code.GDareaObjects2.length = 0;
gdjs.A3Code.GDDObjects1.length = 0;
gdjs.A3Code.GDDObjects2.length = 0;
gdjs.A3Code.GDCObjects1.length = 0;
gdjs.A3Code.GDCObjects2.length = 0;
gdjs.A3Code.GDBObjects1.length = 0;
gdjs.A3Code.GDBObjects2.length = 0;
gdjs.A3Code.GDAObjects1.length = 0;
gdjs.A3Code.GDAObjects2.length = 0;

gdjs.A3Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A3Code'] = gdjs.A3Code;
