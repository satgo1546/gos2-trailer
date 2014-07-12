var startTime = new Date().getTime(),
		aStage = $(".stage"),
		aLogger = $("#logger > div"),
		aTimer = $("#logger > span"),
		aGear = $("#gear"),
		aSuperStage = $("#superstage-parent"),
		aSuperStageFinal = $("#superstage-final"),
		aGrassBlock = $("#grassblock"),
		aGrassBlockGrowing = $("#grassblock-growing"),
		aGrassBlockGrowingAnimation = $("#grassblock-growing-parent"),
		aGrassBlockGrowingStage2 = $("#grassblock-growing-stage2"),
		aGrassBlockGrowingStage3 = $("#grassblock-growing-stage3");
		aGrassBlockGrowingFinal = $("#grassblock-growing-final");
		aSlime = $("#slime"),
		aGreenGear = $("#green-gear"),
		aNormalButton = $("#normal-button"),
		aYellowButton = $("#yellow-button"),
		aDecorationsU = $("#decorations-u"),
		aDecorationsD = $("#decorations-d"),
		aBgImg = $("#bg-image"),
		aTitleText = $("#title-text"),
		aBlackPanelD = $("#black-panel-d"),
		aTitleButtons = $(".title-button"),
		aSaveTitle = $("#save-title"),
		aSaveSlots = $(".save-slot");

function animeLog(info) {
	aLogger.text(info);
}

/*function fadeIn() {
	aFade.addClass("in");
	setTimeout(function () {
		animeLog("Faded in");
	}, 400);
}

function fadeOut() {
	aFade.removeClass("in");
	setTimeout(function () {
		animeLog("Faded out");
	}, 400);
}*/

function countTime() {
	var time = new Date().getTime();
	aTimer.text((time - startTime) / 1000);
	setTimeout(countTime, 300);
}

var slimeFrame = 0;
function drawSlime() {
	aSlime.removeClass("fr0 fr1 fr2 fr3 fr4").addClass("fr" + slimeFrame);
	slimeFrame += 1;
	if (slimeFrame > 4) {
		slimeFrame = 0;
	}
	setTimeout(drawSlime, 170);
}

$(function () {
	countTime();
	
	setTimeout(function () {
		// 0s
		animeLog("Animation started");
		
		aGear.addClass("ani-gear");
		aSuperStageFinal.hide();
		aGrassBlock.hide();
		aGrassBlockGrowingStage3.hide();
		aGrassBlockGrowingFinal.hide();
		drawSlime();
	}, 1);
	
	setTimeout(function () {
		// 2s
	}, 2000);
	
	setTimeout(function () {
		// 4s
		aGear.hide();
	}, 4000);
	
	setTimeout(function () {
		// 8s
		aSuperStageFinal.show();
	}, 8000);
	
	setTimeout(function () {
		// 8.5s
		aSuperStageFinal.addClass("ani");
	}, 8500);
	
	setTimeout(function () {
		// 11.5s
		aGrassBlock.show();
		aGrassBlock.addClass("ani");
	}, 11500);
	
	setTimeout(function () {
		// 12s
		aGrassBlock.removeClass("ani").addClass("final");
		aSuperStageFinal.hide();
	}, 12000);
	
	setTimeout(function () {
		// 14s
		aGrassBlock.hide();
	}, 14000);
	
	setTimeout(function () {
		// 16s
		aGrassBlockGrowing.addClass("final");
	}, 16000);
	
	setTimeout(function () {
		// 17s
		aGrassBlockGrowingAnimation.css("opacity", "1");
		aGrassBlockGrowing.addClass("dirt-only");
	}, 17000);
	
	setTimeout(function () {
		// 20.5s
		aGrassBlockGrowingStage2.css("opacity", "1");
	}, 20500);
	
	setTimeout(function () {
		// 21s
		aGrassBlockGrowingAnimation.hide();
		aGrassBlockGrowingStage3.show();
		aGrassBlockGrowingStage3.addClass("animated fadeInDown");
	}, 21000);
	
	setTimeout(function () {
		// 22s
		aGrassBlockGrowingStage3.removeClass("animated fadeInDown");
		aGrassBlockGrowing.hide();
		aGrassBlockGrowingStage2.hide();
		aGrassBlockGrowingStage3.hide();
		aGrassBlockGrowingFinal.show();
	}, 22000);
	
	setTimeout(function () {
		// 22.5s
		aGrassBlockGrowingFinal.addClass("final");
	}, 22500);
	
	setTimeout(function () {
		aSlime.addClass("fall-down");
	}, 24000);
	
	setTimeout(function () {
		aSlime.addClass("final");
		aGreenGear.addClass("fall-down");
	}, 25000);
	
	setTimeout(function () {
		aGreenGear.addClass("final");
	}, 26000);
	
	setTimeout(function () {
		aNormalButton.addClass("fall-down");
	}, 30000);
	
	setTimeout(function () {
		aNormalButton.addClass("final");
	}, 31000);
	
	setTimeout(function () {
		aYellowButton.addClass("fall-down");
	}, 35000);
	
	setTimeout(function () {
		aYellowButton.addClass("final");
	}, 36000);
	
	setTimeout(function () {
		aGrassBlockGrowingFinal.css("top", "576px");
	}, 44500);
	
	setTimeout(function () {
		aDecorationsU.addClass("in");
		aDecorationsD.addClass("in");
	}, 46000);
	
	setTimeout(function () {
		aBgImg.addClass("in");
	}, 46500);
	
	setTimeout(function () {
		aTitleText.addClass("in");
	}, 48000);
	
	setTimeout(function () {
		aDecorationsD.css("top", "416px");
		aBlackPanelD.addClass("in");
		aTitleButtons.addClass("in");
	}, 49000);
	
	setTimeout(function () {
		aTitleText.addClass("out");
		aDecorationsD.css("top", "544px");
		aBlackPanelD.removeClass("in");
		aTitleButtons.removeClass("in");
		aBgImg.removeClass("fr0").addClass("fr1");
		aSaveTitle.addClass("in");
	}, 50500);
	
	setTimeout(function () {
		aSaveSlots.addClass("in");
	}, 51000);
	
	setTimeout(function () {
		aSaveTitle.removeClass("in");
		aSaveSlots.removeClass("in").addClass("out");
	}, 52500);
	
	setTimeout(function () {
		aDecorationsU.removeClass("in");
		aDecorationsD.css("top", "100%");
	}, 53000);
	
	setTimeout(function () {
		aBgImg.removeClass("in");
	}, 53500);
	
	/*
	setTimeout(function () {
		
	}, );
	
	*/
});
