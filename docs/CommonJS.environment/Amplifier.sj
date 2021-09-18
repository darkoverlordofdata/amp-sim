@STATIC;1.0;p;6;main.jt;294;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.ji;15;AppController.jt;208;

objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);objj_executeFile("AppController.j", YES);main = function(args, namedArgs)
{
    CPApplicationMain(args, namedArgs);
}
p;15;AppController.jt;7737;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.ji;20;controls/Amplifier.jt;7645;

objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);objj_executeFile("controls/Amplifier.j", YES);
{var the_class = objj_allocateClassPair(CPObject, "AppController"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("cabinetList", "CPPopUpButton"), new objj_ivar("cabinetSelection", "CPString"), new objj_ivar("powerButton", "CPButton")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("applicationDidFinishLaunching:"), function $AppController__applicationDidFinishLaunching_(self, _cmd, notification)
{
    var window = ((___r1 = (CPWindow.isa.method_msgSend["alloc"] || _objj_forward)(CPWindow, (CPWindow.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["initWithContentRect:styleMask:"] || _objj_forward)(___r1, "initWithContentRect:styleMask:", CGRectMakeZero(), CPBorderlessBridgeWindowMask)),
        contentView = (window == null ? window : (window.isa.method_msgSend["contentView"] || _objj_forward)(window, (window.isa.method_dtable["contentView"], "contentView")));
    (contentView == null ? contentView : (contentView.isa.method_msgSend["setBackgroundColor:"] || _objj_forward)(contentView, (contentView.isa.method_dtable["setBackgroundColor:"], "setBackgroundColor:"), (CPColor.isa.method_msgSend["lightGrayColor"] || _objj_forward)(CPColor, (CPColor.isa.method_dtable["lightGrayColor"], "lightGrayColor"))));
    (window == null ? window : (window.isa.method_msgSend["orderFront:"] || _objj_forward)(window, (window.isa.method_dtable["orderFront:"], "orderFront:"), self));
    var font = (CPFont.isa.method_msgSend["fontWithName:size:"] || _objj_forward)(CPFont, (CPFont.isa.method_dtable["fontWithName:size:"], CPFont.isa.method_dtable["fontWithName:size:"], "fontWithName:size:"), "Ubuntu", 20);
    var bounds = (contentView == null ? contentView : (contentView.isa.method_msgSend["bounds"] || _objj_forward)(contentView, (contentView.isa.method_dtable["bounds"], "bounds"))),
        width = CGRectGetWidth(bounds),
        height = CGRectGetHeight(bounds);
    var controls = ((___r1 = (Amplifier.isa.method_msgSend["alloc"] || _objj_forward)(Amplifier, (Amplifier.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["initWithFrame:"] || _objj_forward)(___r1, "initWithFrame:", CGRectMake(0, 0, 400.0, 400.0)));
    (contentView == null ? contentView : (contentView.isa.method_msgSend["addSubview:"] || _objj_forward)(contentView, (contentView.isa.method_dtable["addSubview:"], "addSubview:"), controls));
    self.cabinetList = ((___r1 = (CPPopUpButton.isa.method_msgSend["alloc"] || _objj_forward)(CPPopUpButton, (CPPopUpButton.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["initWithFrame:pullsDown:"] || _objj_forward)(___r1, "initWithFrame:pullsDown:", CGRectMake(width / 2 - 100, 40, 240, 20), YES));
    (contentView == null ? contentView : (contentView.isa.method_msgSend["addSubview:"] || _objj_forward)(contentView, (contentView.isa.method_dtable["addSubview:"], "addSubview:"), self.cabinetList));
    self.powerButton = ((___r1 = (CPButton.isa.method_msgSend["alloc"] || _objj_forward)(CPButton, (CPButton.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["initWithFrame:"] || _objj_forward)(___r1, "initWithFrame:", CGRectMake(width / 2 + 140, 40, 40, 20)));
    ((___r1 = self.powerButton), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setTitle:"] || _objj_forward)(___r1, (self.powerButton.isa.method_dtable["setTitle:"], "setTitle:"), "Off"));
    ((___r1 = self.powerButton), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setTarget:"] || _objj_forward)(___r1, (self.powerButton.isa.method_dtable["setTarget:"], "setTarget:"), self));
    ((___r1 = self.powerButton), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setAction:"] || _objj_forward)(___r1, (self.powerButton.isa.method_dtable["setAction:"], "setAction:"), sel_getUid("powerButton_onclick:")));
    (contentView == null ? contentView : (contentView.isa.method_msgSend["addSubview:"] || _objj_forward)(contentView, (contentView.isa.method_dtable["addSubview:"], "addSubview:"), self.powerButton));
    var cabinets = ["Select base cabinet...", "Ampeg Classic", "Randall RT412", "Fender Twin", "Marshall JCM800", "Mesa Traditional"];
    ((___r1 = self.cabinetList), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setFont:"] || _objj_forward)(___r1, (self.cabinetList.isa.method_dtable["setFont:"], "setFont:"), font));
    ((___r1 = self.cabinetList), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["addItemsWithTitles:"] || _objj_forward)(___r1, (self.cabinetList.isa.method_dtable["addItemsWithTitles:"], "addItemsWithTitles:"), cabinets));
    for (var i = 1; i < (cabinets == null ? cabinets : (cabinets.isa.method_msgSend["count"] || _objj_forward)(cabinets, (cabinets.isa.method_dtable["count"], "count"))); i++)
    {
        var item = ((___r1 = self.cabinetList), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["itemAtIndex:"] || _objj_forward)(___r1, (self.cabinetList.isa.method_dtable["itemAtIndex:"], "itemAtIndex:"), i));
        (item == null ? item : (item.isa.method_msgSend["setTarget:"] || _objj_forward)(item, (item.isa.method_dtable["setTarget:"], "setTarget:"), self));
        (item == null ? item : (item.isa.method_msgSend["setAction:"] || _objj_forward)(item, (item.isa.method_dtable["setAction:"], "setAction:"), sel_getUid("cabinet_onselect:")));
    }
    var ___r1;
}

,["void","CPNotification"]), new objj_method(sel_getUid("cabinet_onselect:"), function $AppController__cabinet_onselect_(self, _cmd, sender)
{
    var item = ((___r1 = self.cabinetList), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["selectedItem"] || _objj_forward)(___r1, (self.cabinetList.isa.method_dtable["selectedItem"], "selectedItem")));
    self.cabinetSelection = (item == null ? item : (item.isa.method_msgSend["title"] || _objj_forward)(item, (item.isa.method_dtable["title"], "title")));
    ((___r1 = self.cabinetList), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setTitle:"] || _objj_forward)(___r1, (self.cabinetList.isa.method_dtable["setTitle:"], "setTitle:"), self.cabinetSelection));
    var ___r1;
}

,["void","id"]), new objj_method(sel_getUid("powerButton_onclick:"), function $AppController__powerButton_onclick_(self, _cmd, sender)
{
    if (((___r1 = ((___r2 = self.powerButton), ___r2 == null ? ___r2 : (___r2.isa.method_msgSend["title"] || _objj_forward)(___r2, (self.powerButton.isa.method_dtable["title"], "title")))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["isEqualToString:"] || _objj_forward)(___r1, "isEqualToString:", "On")))
    {
        ((___r1 = self.powerButton), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setTitle:"] || _objj_forward)(___r1, (self.powerButton.isa.method_dtable["setTitle:"], "setTitle:"), "Off"));
        ((___r1 = self.cabinetList), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setEnabled:"] || _objj_forward)(___r1, (self.cabinetList.isa.method_dtable["setEnabled:"], "setEnabled:"), YES));
    }
    else
    {
        ((___r1 = self.powerButton), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setTitle:"] || _objj_forward)(___r1, (self.powerButton.isa.method_dtable["setTitle:"], "setTitle:"), "On"));
        ((___r1 = self.cabinetList), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["setEnabled:"] || _objj_forward)(___r1, (self.cabinetList.isa.method_dtable["setEnabled:"], "setEnabled:"), NO));
    }
    var ___r1, ___r2;
}

,["void","id"])]);
}
p;20;controls/Amplifier.jt;8297;@STATIC;1.0;I;16;AppKit/CALayer.jt;8257;

objj_executeFile("AppKit/CALayer.j", NO);
{var the_class = objj_allocateClassPair(CPView, "Amplifier"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("cabinetList", "CPPopUpButton")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("initWithFrame:"), function $Amplifier__initWithFrame_(self, _cmd, frame)
{
    self = (objj_getClass("Amplifier").super_class.method_dtable["initWithFrame:"] || _objj_forward)(self, "initWithFrame:", frame);
    if (self)
    {
        var amplifier = ((___r1 = (CPPanel.isa.method_msgSend["alloc"] || _objj_forward)(CPPanel, (CPPanel.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["initWithContentRect:styleMask:"] || _objj_forward)(___r1, "initWithContentRect:styleMask:", CGRectMake(100, 120, 125, 225), CPBorderlessWindowMask));
        (amplifier == null ? amplifier : (amplifier.isa.method_msgSend["setFloatingPanel:"] || _objj_forward)(amplifier, (amplifier.isa.method_dtable["setFloatingPanel:"], "setFloatingPanel:"), YES));
        (amplifier == null ? amplifier : (amplifier.isa.method_msgSend["orderFront:"] || _objj_forward)(amplifier, (amplifier.isa.method_dtable["orderFront:"], "orderFront:"), self));
        (amplifier == null ? amplifier : (amplifier.isa.method_msgSend["setTitle:"] || _objj_forward)(amplifier, (amplifier.isa.method_dtable["setTitle:"], "setTitle:"), "Amplifier"));
        var panelContentView = (amplifier == null ? amplifier : (amplifier.isa.method_msgSend["contentView"] || _objj_forward)(amplifier, (amplifier.isa.method_dtable["contentView"], "contentView"))),
            centerX = (CGRectGetWidth((panelContentView == null ? panelContentView : (panelContentView.isa.method_msgSend["bounds"] || _objj_forward)(panelContentView, (panelContentView.isa.method_dtable["bounds"], "bounds")))) - 135) / 2;
        (panelContentView == null ? panelContentView : (panelContentView.isa.method_msgSend["setBackgroundColor:"] || _objj_forward)(panelContentView, (panelContentView.isa.method_dtable["setBackgroundColor:"], "setBackgroundColor:"), (CPColor.isa.method_msgSend["grayColor"] || _objj_forward)(CPColor, (CPColor.isa.method_dtable["grayColor"], "grayColor"))));
        var volumeSlider = ((___r1 = (CPSlider.isa.method_msgSend["alloc"] || _objj_forward)(CPSlider, (CPSlider.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["initWithFrame:"] || _objj_forward)(___r1, "initWithFrame:", CGRectMake(centerX + 30, 43, 24, 135)));
        (volumeSlider == null ? volumeSlider : (volumeSlider.isa.method_msgSend["setMinValue:"] || _objj_forward)(volumeSlider, (volumeSlider.isa.method_dtable["setMinValue:"], "setMinValue:"), 0));
        (volumeSlider == null ? volumeSlider : (volumeSlider.isa.method_msgSend["setMaxValue:"] || _objj_forward)(volumeSlider, (volumeSlider.isa.method_dtable["setMaxValue:"], "setMaxValue:"), 100));
        (volumeSlider == null ? volumeSlider : (volumeSlider.isa.method_msgSend["setValue:"] || _objj_forward)(volumeSlider, (volumeSlider.isa.method_dtable["setValue:"], "setValue:"), 50));
        (panelContentView == null ? panelContentView : (panelContentView.isa.method_msgSend["addSubview:"] || _objj_forward)(panelContentView, (panelContentView.isa.method_dtable["addSubview:"], "addSubview:"), volumeSlider));
        var volumeStartLabel = (self == null ? self : (self.isa.method_msgSend["labelWithTitle:"] || _objj_forward)(self, (self.isa.method_dtable["labelWithTitle:"], "labelWithTitle:"), "10")),
            volumeEndLabel = (self == null ? self : (self.isa.method_msgSend["labelWithTitle:"] || _objj_forward)(self, (self.isa.method_dtable["labelWithTitle:"], "labelWithTitle:"), " 0"));
        (volumeStartLabel == null ? volumeStartLabel : (volumeStartLabel.isa.method_msgSend["setFrameOrigin:"] || _objj_forward)(volumeStartLabel, (volumeStartLabel.isa.method_dtable["setFrameOrigin:"], "setFrameOrigin:"), CGPointMake(centerX + 35, 10)));
        (volumeEndLabel == null ? volumeEndLabel : (volumeEndLabel.isa.method_msgSend["setFrameOrigin:"] || _objj_forward)(volumeEndLabel, (volumeEndLabel.isa.method_dtable["setFrameOrigin:"], "setFrameOrigin:"), CGPointMake(centerX + 35, 190)));
        (panelContentView == null ? panelContentView : (panelContentView.isa.method_msgSend["addSubview:"] || _objj_forward)(panelContentView, (panelContentView.isa.method_dtable["addSubview:"], "addSubview:"), volumeStartLabel));
        (panelContentView == null ? panelContentView : (panelContentView.isa.method_msgSend["addSubview:"] || _objj_forward)(panelContentView, (panelContentView.isa.method_dtable["addSubview:"], "addSubview:"), volumeEndLabel));
        var gainSlider = ((___r1 = (CPSlider.isa.method_msgSend["alloc"] || _objj_forward)(CPSlider, (CPSlider.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["initWithFrame:"] || _objj_forward)(___r1, "initWithFrame:", CGRectMake(centerX + 80, 43, 24, 135)));
        (gainSlider == null ? gainSlider : (gainSlider.isa.method_msgSend["setMinValue:"] || _objj_forward)(gainSlider, (gainSlider.isa.method_dtable["setMinValue:"], "setMinValue:"), 0));
        (gainSlider == null ? gainSlider : (gainSlider.isa.method_msgSend["setMaxValue:"] || _objj_forward)(gainSlider, (gainSlider.isa.method_dtable["setMaxValue:"], "setMaxValue:"), 100));
        (gainSlider == null ? gainSlider : (gainSlider.isa.method_msgSend["setValue:"] || _objj_forward)(gainSlider, (gainSlider.isa.method_dtable["setValue:"], "setValue:"), 50));
        (panelContentView == null ? panelContentView : (panelContentView.isa.method_msgSend["addSubview:"] || _objj_forward)(panelContentView, (panelContentView.isa.method_dtable["addSubview:"], "addSubview:"), gainSlider));
        var gainStartLabel = (self == null ? self : (self.isa.method_msgSend["labelWithTitle:"] || _objj_forward)(self, (self.isa.method_dtable["labelWithTitle:"], "labelWithTitle:"), "10")),
            gainEndLabel = (self == null ? self : (self.isa.method_msgSend["labelWithTitle:"] || _objj_forward)(self, (self.isa.method_dtable["labelWithTitle:"], "labelWithTitle:"), " 0"));
        (gainStartLabel == null ? gainStartLabel : (gainStartLabel.isa.method_msgSend["setFrameOrigin:"] || _objj_forward)(gainStartLabel, (gainStartLabel.isa.method_dtable["setFrameOrigin:"], "setFrameOrigin:"), CGPointMake(centerX + 85, 10)));
        (gainEndLabel == null ? gainEndLabel : (gainEndLabel.isa.method_msgSend["setFrameOrigin:"] || _objj_forward)(gainEndLabel, (gainEndLabel.isa.method_dtable["setFrameOrigin:"], "setFrameOrigin:"), CGPointMake(centerX + 85, 190)));
        (panelContentView == null ? panelContentView : (panelContentView.isa.method_msgSend["addSubview:"] || _objj_forward)(panelContentView, (panelContentView.isa.method_dtable["addSubview:"], "addSubview:"), gainStartLabel));
        (panelContentView == null ? panelContentView : (panelContentView.isa.method_msgSend["addSubview:"] || _objj_forward)(panelContentView, (panelContentView.isa.method_dtable["addSubview:"], "addSubview:"), gainEndLabel));
    }
    return self;
    var ___r1;
}

,["id","CGRect"]), new objj_method(sel_getUid("labelWithTitle:"), function $Amplifier__labelWithTitle_(self, _cmd, aTitle)
{
    var label = ((___r1 = (CPTextField.isa.method_msgSend["alloc"] || _objj_forward)(CPTextField, (CPTextField.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? ___r1 : (___r1.isa.method_msgSend["initWithFrame:"] || _objj_forward)(___r1, "initWithFrame:", CGRectMakeZero()));
    (label == null ? label : (label.isa.method_msgSend["setStringValue:"] || _objj_forward)(label, (label.isa.method_dtable["setStringValue:"], "setStringValue:"), aTitle));
    (label == null ? label : (label.isa.method_msgSend["setTextColor:"] || _objj_forward)(label, (label.isa.method_dtable["setTextColor:"], "setTextColor:"), (CPColor.isa.method_msgSend["whiteColor"] || _objj_forward)(CPColor, (CPColor.isa.method_dtable["whiteColor"], "whiteColor"))));
    (label == null ? label : (label.isa.method_msgSend["sizeToFit"] || _objj_forward)(label, (label.isa.method_dtable["sizeToFit"], "sizeToFit")));
    return label;
    var ___r1;
}

,["CPTextField","CPString"])]);
}
e;