gdjs.Scene12Code = {};
gdjs.Scene12Code.GDforwardButtonObjects1= [];
gdjs.Scene12Code.GDforwardButtonObjects2= [];
gdjs.Scene12Code.GDbackButtonObjects1= [];
gdjs.Scene12Code.GDbackButtonObjects2= [];
gdjs.Scene12Code.GDperaVereiraObjects1= [];
gdjs.Scene12Code.GDperaVereiraObjects2= [];
gdjs.Scene12Code.GDtextoObjects1= [];
gdjs.Scene12Code.GDtextoObjects2= [];
gdjs.Scene12Code.GDgoBackToAtivObjects1= [];
gdjs.Scene12Code.GDgoBackToAtivObjects2= [];
gdjs.Scene12Code.GDgoBackToTxtObjects1= [];
gdjs.Scene12Code.GDgoBackToTxtObjects2= [];
gdjs.Scene12Code.GDtelaObjects1= [];
gdjs.Scene12Code.GDtelaObjects2= [];
gdjs.Scene12Code.GDop1Objects1= [];
gdjs.Scene12Code.GDop1Objects2= [];
gdjs.Scene12Code.GDop2Objects1= [];
gdjs.Scene12Code.GDop2Objects2= [];
gdjs.Scene12Code.GDop3Objects1= [];
gdjs.Scene12Code.GDop3Objects2= [];
gdjs.Scene12Code.GDop4Objects1= [];
gdjs.Scene12Code.GDop4Objects2= [];
gdjs.Scene12Code.GDop1ImgObjects1= [];
gdjs.Scene12Code.GDop1ImgObjects2= [];
gdjs.Scene12Code.GDop2ImgObjects1= [];
gdjs.Scene12Code.GDop2ImgObjects2= [];
gdjs.Scene12Code.GDop3ImgObjects1= [];
gdjs.Scene12Code.GDop3ImgObjects2= [];
gdjs.Scene12Code.GDop4ImgObjects1= [];
gdjs.Scene12Code.GDop4ImgObjects2= [];

gdjs.Scene12Code.conditionTrue_0 = {val:false};
gdjs.Scene12Code.condition0IsTrue_0 = {val:false};
gdjs.Scene12Code.condition1IsTrue_0 = {val:false};
gdjs.Scene12Code.condition2IsTrue_0 = {val:false};
gdjs.Scene12Code.condition3IsTrue_0 = {val:false};
gdjs.Scene12Code.condition4IsTrue_0 = {val:false};
gdjs.Scene12Code.condition5IsTrue_0 = {val:false};
gdjs.Scene12Code.conditionTrue_1 = {val:false};
gdjs.Scene12Code.condition0IsTrue_1 = {val:false};
gdjs.Scene12Code.condition1IsTrue_1 = {val:false};
gdjs.Scene12Code.condition2IsTrue_1 = {val:false};
gdjs.Scene12Code.condition3IsTrue_1 = {val:false};
gdjs.Scene12Code.condition4IsTrue_1 = {val:false};
gdjs.Scene12Code.condition5IsTrue_1 = {val:false};


gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop1ImgObjects1Objects = Hashtable.newFrom({"op1Img": gdjs.Scene12Code.GDop1ImgObjects1});gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop2ImgObjects1Objects = Hashtable.newFrom({"op2Img": gdjs.Scene12Code.GDop2ImgObjects1});gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop3ImgObjects1Objects = Hashtable.newFrom({"op3Img": gdjs.Scene12Code.GDop3ImgObjects1});gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop4ImgObjects1Objects = Hashtable.newFrom({"op4Img": gdjs.Scene12Code.GDop4ImgObjects1});gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop1Objects1Objects = Hashtable.newFrom({"op1": gdjs.Scene12Code.GDop1Objects1});gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop2Objects1Objects = Hashtable.newFrom({"op2": gdjs.Scene12Code.GDop2Objects1});gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop3Objects1Objects = Hashtable.newFrom({"op3": gdjs.Scene12Code.GDop3Objects1});gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop4Objects1Objects = Hashtable.newFrom({"op4": gdjs.Scene12Code.GDop4Objects1});gdjs.Scene12Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
gdjs.Scene12Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.random(23));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(9));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(4);
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDperaVereiraObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceScene");
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 4;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 5;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 6;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 7;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 8;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 9;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setPosition(288,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setPosition(512,160);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setPosition(736,160);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene11", false);
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 4;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 5;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 6;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 7;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 8;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 9;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 10;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 11;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 12;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 13;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 14;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 15;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 16;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 17;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 18;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 19;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 20;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 21;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 22;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,608);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 23;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setPosition(128,416);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setPosition(128,480);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setPosition(128,544);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setPosition(128,608);
}
}}

}


{

gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene12Code.GDop1Objects1.length;i<l;++i) {
    if ( gdjs.Scene12Code.GDop1Objects1[i].getOpacity() < 255 ) {
        gdjs.Scene12Code.condition0IsTrue_0.val = true;
        gdjs.Scene12Code.GDop1Objects1[k] = gdjs.Scene12Code.GDop1Objects1[i];
        ++k;
    }
}
gdjs.Scene12Code.GDop1Objects1.length = k;}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene"));
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene12Code.GDop1Objects1 */
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
gdjs.Scene12Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setOpacity(gdjs.Scene12Code.GDop1Objects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setOpacity(gdjs.Scene12Code.GDop2Objects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setOpacity(gdjs.Scene12Code.GDop3Objects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setOpacity(gdjs.Scene12Code.GDop4Objects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setOpacity(gdjs.Scene12Code.GDop1ImgObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setOpacity(gdjs.Scene12Code.GDop2ImgObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setOpacity(gdjs.Scene12Code.GDop3ImgObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setOpacity(gdjs.Scene12Code.GDop4ImgObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene12Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDperaVereiraObjects1[i].setOpacity(gdjs.Scene12Code.GDperaVereiraObjects1[i].getOpacity() + (999 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop1ImgObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene12Code.GDop1ImgObjects1 */
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop2ImgObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
/* Reuse gdjs.Scene12Code.GDop2ImgObjects1 */
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(2);
}}

}


{

gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop3ImgObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
/* Reuse gdjs.Scene12Code.GDop3ImgObjects1 */
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(3);
}}

}


{

gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop4ImgObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
/* Reuse gdjs.Scene12Code.GDop4ImgObjects1 */
{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(4);
}}

}


{

gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene12Code.GDop1Objects1 */
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
/* Reuse gdjs.Scene12Code.GDop2Objects1 */
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
/* Reuse gdjs.Scene12Code.GDop3Objects1 */
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));

gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene12Code.mapOfGDgdjs_46Scene12Code_46GDop4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
/* Reuse gdjs.Scene12Code.GDop4Objects1 */
{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
gdjs.Scene12Code.condition2IsTrue_0.val = false;
gdjs.Scene12Code.condition3IsTrue_0.val = false;
gdjs.Scene12Code.condition4IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 0;
}if ( gdjs.Scene12Code.condition1IsTrue_0.val ) {
{
gdjs.Scene12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.Scene12Code.condition2IsTrue_0.val ) {
{
gdjs.Scene12Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "valueSinceSelect");
}if ( gdjs.Scene12Code.condition3IsTrue_0.val ) {
{
{gdjs.Scene12Code.conditionTrue_1 = gdjs.Scene12Code.condition4IsTrue_0;
gdjs.Scene12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7272356);
}
}}
}
}
}
if (gdjs.Scene12Code.condition4IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
gdjs.Scene12Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene12Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDperaVereiraObjects1[i].setAnimation(2);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "valueSinceSelect");
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
gdjs.Scene12Code.condition2IsTrue_0.val = false;
gdjs.Scene12Code.condition3IsTrue_0.val = false;
gdjs.Scene12Code.condition4IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 0;
}if ( gdjs.Scene12Code.condition1IsTrue_0.val ) {
{
gdjs.Scene12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.Scene12Code.condition2IsTrue_0.val ) {
{
gdjs.Scene12Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "valueSinceSelect");
}if ( gdjs.Scene12Code.condition3IsTrue_0.val ) {
{
{gdjs.Scene12Code.conditionTrue_1 = gdjs.Scene12Code.condition4IsTrue_0;
gdjs.Scene12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8980420);
}
}}
}
}
}
if (gdjs.Scene12Code.condition4IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
gdjs.Scene12Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene12Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "valueSinceSelect");
}{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
gdjs.Scene12Code.condition2IsTrue_0.val = false;
gdjs.Scene12Code.condition3IsTrue_0.val = false;
gdjs.Scene12Code.condition4IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 0;
}if ( gdjs.Scene12Code.condition1IsTrue_0.val ) {
{
gdjs.Scene12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.Scene12Code.condition2IsTrue_0.val ) {
{
gdjs.Scene12Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.Scene12Code.condition3IsTrue_0.val ) {
{
{gdjs.Scene12Code.conditionTrue_1 = gdjs.Scene12Code.condition4IsTrue_0;
gdjs.Scene12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6816812);
}
}}
}
}
}
if (gdjs.Scene12Code.condition4IsTrue_0.val) {
gdjs.Scene12Code.GDop1Objects1.createFrom(runtimeScene.getObjects("op1"));
gdjs.Scene12Code.GDop1ImgObjects1.createFrom(runtimeScene.getObjects("op1Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop1Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1Objects1[i].setOpacity(25);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop1ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop1ImgObjects1[i].setOpacity(25);
}
}{runtimeScene.getVariables().getFromIndex(4).sub(1);
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
gdjs.Scene12Code.condition2IsTrue_0.val = false;
gdjs.Scene12Code.condition3IsTrue_0.val = false;
gdjs.Scene12Code.condition4IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 0;
}if ( gdjs.Scene12Code.condition1IsTrue_0.val ) {
{
gdjs.Scene12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.Scene12Code.condition2IsTrue_0.val ) {
{
gdjs.Scene12Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if ( gdjs.Scene12Code.condition3IsTrue_0.val ) {
{
{gdjs.Scene12Code.conditionTrue_1 = gdjs.Scene12Code.condition4IsTrue_0;
gdjs.Scene12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6818252);
}
}}
}
}
}
if (gdjs.Scene12Code.condition4IsTrue_0.val) {
gdjs.Scene12Code.GDop2Objects1.createFrom(runtimeScene.getObjects("op2"));
gdjs.Scene12Code.GDop2ImgObjects1.createFrom(runtimeScene.getObjects("op2Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop2Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2Objects1[i].setOpacity(25);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop2ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop2ImgObjects1[i].setOpacity(25);
}
}{runtimeScene.getVariables().getFromIndex(4).sub(1);
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
gdjs.Scene12Code.condition2IsTrue_0.val = false;
gdjs.Scene12Code.condition3IsTrue_0.val = false;
gdjs.Scene12Code.condition4IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 0;
}if ( gdjs.Scene12Code.condition1IsTrue_0.val ) {
{
gdjs.Scene12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.Scene12Code.condition2IsTrue_0.val ) {
{
gdjs.Scene12Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if ( gdjs.Scene12Code.condition3IsTrue_0.val ) {
{
{gdjs.Scene12Code.conditionTrue_1 = gdjs.Scene12Code.condition4IsTrue_0;
gdjs.Scene12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6845108);
}
}}
}
}
}
if (gdjs.Scene12Code.condition4IsTrue_0.val) {
gdjs.Scene12Code.GDop3Objects1.createFrom(runtimeScene.getObjects("op3"));
gdjs.Scene12Code.GDop3ImgObjects1.createFrom(runtimeScene.getObjects("op3Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop3Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3Objects1[i].setOpacity(25);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop3ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop3ImgObjects1[i].setOpacity(25);
}
}{runtimeScene.getVariables().getFromIndex(4).sub(1);
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
gdjs.Scene12Code.condition2IsTrue_0.val = false;
gdjs.Scene12Code.condition3IsTrue_0.val = false;
gdjs.Scene12Code.condition4IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}if ( gdjs.Scene12Code.condition1IsTrue_0.val ) {
{
gdjs.Scene12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 0;
}if ( gdjs.Scene12Code.condition2IsTrue_0.val ) {
{
gdjs.Scene12Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.Scene12Code.condition3IsTrue_0.val ) {
{
{gdjs.Scene12Code.conditionTrue_1 = gdjs.Scene12Code.condition4IsTrue_0;
gdjs.Scene12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6932724);
}
}}
}
}
}
if (gdjs.Scene12Code.condition4IsTrue_0.val) {
gdjs.Scene12Code.GDop4Objects1.createFrom(runtimeScene.getObjects("op4"));
gdjs.Scene12Code.GDop4ImgObjects1.createFrom(runtimeScene.getObjects("op4Img"));
{for(var i = 0, len = gdjs.Scene12Code.GDop4Objects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4Objects1[i].setOpacity(25);
}
}{for(var i = 0, len = gdjs.Scene12Code.GDop4ImgObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDop4ImgObjects1[i].setOpacity(25);
}
}{runtimeScene.getVariables().getFromIndex(4).sub(1);
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}if (gdjs.Scene12Code.condition0IsTrue_0.val) {
gdjs.Scene12Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene12Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene12Code.GDperaVereiraObjects1[i].setAnimation(5);
}
}}

}


{


gdjs.Scene12Code.condition0IsTrue_0.val = false;
gdjs.Scene12Code.condition1IsTrue_0.val = false;
{
gdjs.Scene12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Scene12Code.condition0IsTrue_0.val ) {
{
gdjs.Scene12Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "delay");
}}
if (gdjs.Scene12Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene13", false);
}}

}


}; //End of gdjs.Scene12Code.eventsList0xb25a8


gdjs.Scene12Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene12Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene12Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene12Code.GDbackButtonObjects1.length = 0;
gdjs.Scene12Code.GDbackButtonObjects2.length = 0;
gdjs.Scene12Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene12Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene12Code.GDtextoObjects1.length = 0;
gdjs.Scene12Code.GDtextoObjects2.length = 0;
gdjs.Scene12Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene12Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene12Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene12Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene12Code.GDtelaObjects1.length = 0;
gdjs.Scene12Code.GDtelaObjects2.length = 0;
gdjs.Scene12Code.GDop1Objects1.length = 0;
gdjs.Scene12Code.GDop1Objects2.length = 0;
gdjs.Scene12Code.GDop2Objects1.length = 0;
gdjs.Scene12Code.GDop2Objects2.length = 0;
gdjs.Scene12Code.GDop3Objects1.length = 0;
gdjs.Scene12Code.GDop3Objects2.length = 0;
gdjs.Scene12Code.GDop4Objects1.length = 0;
gdjs.Scene12Code.GDop4Objects2.length = 0;
gdjs.Scene12Code.GDop1ImgObjects1.length = 0;
gdjs.Scene12Code.GDop1ImgObjects2.length = 0;
gdjs.Scene12Code.GDop2ImgObjects1.length = 0;
gdjs.Scene12Code.GDop2ImgObjects2.length = 0;
gdjs.Scene12Code.GDop3ImgObjects1.length = 0;
gdjs.Scene12Code.GDop3ImgObjects2.length = 0;
gdjs.Scene12Code.GDop4ImgObjects1.length = 0;
gdjs.Scene12Code.GDop4ImgObjects2.length = 0;

gdjs.Scene12Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene12Code'] = gdjs.Scene12Code;
