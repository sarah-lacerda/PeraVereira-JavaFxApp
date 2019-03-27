gdjs.textoCode = {};
gdjs.textoCode.GDbuttonNextObjects1= [];
gdjs.textoCode.GDbuttonNextObjects2= [];
gdjs.textoCode.GDbuttonBackObjects1= [];
gdjs.textoCode.GDbuttonBackObjects2= [];
gdjs.textoCode.GDtextObjects1= [];
gdjs.textoCode.GDtextObjects2= [];
gdjs.textoCode.GDperaObjects1= [];
gdjs.textoCode.GDperaObjects2= [];
gdjs.textoCode.GDperaSaysObjects1= [];
gdjs.textoCode.GDperaSaysObjects2= [];

gdjs.textoCode.conditionTrue_0 = {val:false};
gdjs.textoCode.condition0IsTrue_0 = {val:false};
gdjs.textoCode.condition1IsTrue_0 = {val:false};
gdjs.textoCode.condition2IsTrue_0 = {val:false};
gdjs.textoCode.condition3IsTrue_0 = {val:false};
gdjs.textoCode.condition4IsTrue_0 = {val:false};
gdjs.textoCode.condition5IsTrue_0 = {val:false};
gdjs.textoCode.conditionTrue_1 = {val:false};
gdjs.textoCode.condition0IsTrue_1 = {val:false};
gdjs.textoCode.condition1IsTrue_1 = {val:false};
gdjs.textoCode.condition2IsTrue_1 = {val:false};
gdjs.textoCode.condition3IsTrue_1 = {val:false};
gdjs.textoCode.condition4IsTrue_1 = {val:false};
gdjs.textoCode.condition5IsTrue_1 = {val:false};


gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonNextObjects1Objects = Hashtable.newFrom({"buttonNext": gdjs.textoCode.GDbuttonNextObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonNextObjects1Objects = Hashtable.newFrom({"buttonNext": gdjs.textoCode.GDbuttonNextObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonBackObjects1Objects = Hashtable.newFrom({"buttonBack": gdjs.textoCode.GDbuttonBackObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonNextObjects1Objects = Hashtable.newFrom({"buttonNext": gdjs.textoCode.GDbuttonNextObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonBackObjects1Objects = Hashtable.newFrom({"buttonBack": gdjs.textoCode.GDbuttonBackObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonBackObjects1Objects = Hashtable.newFrom({"buttonBack": gdjs.textoCode.GDbuttonBackObjects1});gdjs.textoCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.textoCode.GDbuttonNextObjects1.createFrom(runtimeScene.getObjects("buttonNext"));
gdjs.textoCode.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
gdjs.textoCode.condition2IsTrue_0.val = false;
gdjs.textoCode.condition3IsTrue_0.val = false;
gdjs.textoCode.condition4IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.textoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.textoCode.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.textoCode.GDtextObjects1[i].getAnimation() != 3 ) {
        gdjs.textoCode.condition2IsTrue_0.val = true;
        gdjs.textoCode.GDtextObjects1[k] = gdjs.textoCode.GDtextObjects1[i];
        ++k;
    }
}
gdjs.textoCode.GDtextObjects1.length = k;}if ( gdjs.textoCode.condition2IsTrue_0.val ) {
{
gdjs.textoCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timeSinceScene");
}if ( gdjs.textoCode.condition3IsTrue_0.val ) {
{
{gdjs.textoCode.conditionTrue_1 = gdjs.textoCode.condition4IsTrue_0;
gdjs.textoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9874636);
}
}}
}
}
}
if (gdjs.textoCode.condition4IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDbuttonNextObjects1 */
/* Reuse gdjs.textoCode.GDtextObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDbuttonNextObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbuttonNextObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.textoCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDtextObjects1[i].setAnimation(gdjs.textoCode.GDtextObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceScene");
}}

}


{

gdjs.textoCode.GDbuttonNextObjects1.createFrom(runtimeScene.getObjects("buttonNext"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonNextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.textoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDbuttonNextObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDbuttonNextObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbuttonNextObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.textoCode.GDbuttonBackObjects1.createFrom(runtimeScene.getObjects("buttonBack"));
gdjs.textoCode.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
gdjs.textoCode.condition2IsTrue_0.val = false;
gdjs.textoCode.condition3IsTrue_0.val = false;
gdjs.textoCode.condition4IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.textoCode.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.textoCode.GDtextObjects1[i].getAnimation() != 0 ) {
        gdjs.textoCode.condition1IsTrue_0.val = true;
        gdjs.textoCode.GDtextObjects1[k] = gdjs.textoCode.GDtextObjects1[i];
        ++k;
    }
}
gdjs.textoCode.GDtextObjects1.length = k;}if ( gdjs.textoCode.condition1IsTrue_0.val ) {
{
gdjs.textoCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timeSinceScene");
}if ( gdjs.textoCode.condition2IsTrue_0.val ) {
{
gdjs.textoCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.textoCode.condition3IsTrue_0.val ) {
{
{gdjs.textoCode.conditionTrue_1 = gdjs.textoCode.condition4IsTrue_0;
gdjs.textoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9876564);
}
}}
}
}
}
if (gdjs.textoCode.condition4IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDbuttonBackObjects1 */
/* Reuse gdjs.textoCode.GDtextObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDbuttonBackObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbuttonBackObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.textoCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDtextObjects1[i].setAnimation(gdjs.textoCode.GDtextObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceScene");
}}

}


{

gdjs.textoCode.GDbuttonNextObjects1.createFrom(runtimeScene.getObjects("buttonNext"));
gdjs.textoCode.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
gdjs.textoCode.condition2IsTrue_0.val = false;
gdjs.textoCode.condition3IsTrue_0.val = false;
gdjs.textoCode.condition4IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.textoCode.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.textoCode.GDtextObjects1[i].getAnimation() == 3 ) {
        gdjs.textoCode.condition1IsTrue_0.val = true;
        gdjs.textoCode.GDtextObjects1[k] = gdjs.textoCode.GDtextObjects1[i];
        ++k;
    }
}
gdjs.textoCode.GDtextObjects1.length = k;}if ( gdjs.textoCode.condition1IsTrue_0.val ) {
{
gdjs.textoCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.textoCode.condition2IsTrue_0.val ) {
{
gdjs.textoCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.textoCode.condition3IsTrue_0.val ) {
{
{gdjs.textoCode.conditionTrue_1 = gdjs.textoCode.condition4IsTrue_0;
gdjs.textoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9877828);
}
}}
}
}
}
if (gdjs.textoCode.condition4IsTrue_0.val) {
gdjs.textoCode.GDbuttonBackObjects1.createFrom(runtimeScene.getObjects("buttonBack"));
{for(var i = 0, len = gdjs.textoCode.GDbuttonBackObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbuttonBackObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ex1", false);
}}

}


{

gdjs.textoCode.GDbuttonBackObjects1.createFrom(runtimeScene.getObjects("buttonBack"));
gdjs.textoCode.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
gdjs.textoCode.condition2IsTrue_0.val = false;
gdjs.textoCode.condition3IsTrue_0.val = false;
gdjs.textoCode.condition4IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.textoCode.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.textoCode.GDtextObjects1[i].getAnimation() == 0 ) {
        gdjs.textoCode.condition1IsTrue_0.val = true;
        gdjs.textoCode.GDtextObjects1[k] = gdjs.textoCode.GDtextObjects1[i];
        ++k;
    }
}
gdjs.textoCode.GDtextObjects1.length = k;}if ( gdjs.textoCode.condition1IsTrue_0.val ) {
{
gdjs.textoCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timeSinceScene");
}if ( gdjs.textoCode.condition2IsTrue_0.val ) {
{
gdjs.textoCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.textoCode.condition3IsTrue_0.val ) {
{
{gdjs.textoCode.conditionTrue_1 = gdjs.textoCode.condition4IsTrue_0;
gdjs.textoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9879036);
}
}}
}
}
}
if (gdjs.textoCode.condition4IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDbuttonBackObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDbuttonBackObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbuttonBackObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "capa", false);
}}

}


{

gdjs.textoCode.GDbuttonBackObjects1.createFrom(runtimeScene.getObjects("buttonBack"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbuttonBackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.textoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDbuttonBackObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDbuttonBackObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbuttonBackObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.textoCode.eventsList0xb25a8


gdjs.textoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.textoCode.GDbuttonNextObjects1.length = 0;
gdjs.textoCode.GDbuttonNextObjects2.length = 0;
gdjs.textoCode.GDbuttonBackObjects1.length = 0;
gdjs.textoCode.GDbuttonBackObjects2.length = 0;
gdjs.textoCode.GDtextObjects1.length = 0;
gdjs.textoCode.GDtextObjects2.length = 0;
gdjs.textoCode.GDperaObjects1.length = 0;
gdjs.textoCode.GDperaObjects2.length = 0;
gdjs.textoCode.GDperaSaysObjects1.length = 0;
gdjs.textoCode.GDperaSaysObjects2.length = 0;

gdjs.textoCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['textoCode'] = gdjs.textoCode;
