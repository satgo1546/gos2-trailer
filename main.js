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
		aSaveSlots = $(".save-slot"),
		aEndingTitle = $("#ending-title"),
		aEndingPlayer = $("#ending-player"),
		aEndingFooter = $("#ending-footer"),
		aEndingObjects = $("#ending-title, #ending-player, #ending-footer");

function animeLog(info) {
	aLogger.text(info);
}

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
		aEndingTitle.hide();
		aEndingPlayer.hide();
		aEndingFooter.hide();
		aEndingObjects.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass("animated zoomIn fadeInLeft flipInX fadeOut");
		});
	}, 1);
	
	setTimeout(function () {
		// 2s
		animeLog("Keyframe: 2s");
	}, 2000);
	
	setTimeout(function () {
		// 4s
		animeLog("Keyframe: 4s");
		aGear.hide();
	}, 4000);
	
	setTimeout(function () {
		// 8s
		animeLog("Keyframe: 8s");
		aSuperStageFinal.show();
	}, 8000);
	
	setTimeout(function () {
		// 8.5s
		animeLog("Keyframe: 8.5s");
		aSuperStageFinal.addClass("ani");
	}, 8500);
	
	setTimeout(function () {
		// 11.5s
		animeLog("Keyframe: 11.5s");
		aGrassBlock.show();
		aGrassBlock.addClass("ani");
	}, 11500);
	
	setTimeout(function () {
		// 12s
		animeLog("Keyframe: 12s");
		aGrassBlock.removeClass("ani").addClass("final");
		aSuperStageFinal.hide();
	}, 12000);
	
	setTimeout(function () {
		// 14s
		animeLog("Keyframe: 14s");
		aGrassBlock.hide();
	}, 14000);
	
	setTimeout(function () {
		// 16s
		animeLog("Keyframe: 16s");
		aGrassBlockGrowing.addClass("final");
	}, 16000);
	
	setTimeout(function () {
		// 17s
		animeLog("Keyframe: 17s");
		aGrassBlockGrowingAnimation.css("opacity", "1");
		aGrassBlockGrowing.addClass("dirt-only");
	}, 17000);
	
	setTimeout(function () {
		// 20.5s
		animeLog("Keyframe: 20.5s");
		aGrassBlockGrowingStage2.css("opacity", "1");
	}, 20500);
	
	setTimeout(function () {
		// 21s
		animeLog("Keyframe: 21s");
		aGrassBlockGrowingAnimation.hide();
		aGrassBlockGrowingStage3.show();
		aGrassBlockGrowingStage3.addClass("animated fadeInDown");
	}, 21000);
	
	setTimeout(function () {
		// 22s
		animeLog("Keyframe: 22s");
		aGrassBlockGrowingStage3.removeClass("animated fadeInDown");
		aGrassBlockGrowing.hide();
		aGrassBlockGrowingStage2.hide();
		aGrassBlockGrowingStage3.hide();
		aGrassBlockGrowingFinal.show();
	}, 22000);
	
	setTimeout(function () {
		// 22.5s
		animeLog("Keyframe: 22.5s");
		aGrassBlockGrowingFinal.addClass("final");
	}, 22500);
	
	setTimeout(function () {
		// 24s
		animeLog("Keyframe: 24s");
		aSlime.addClass("fall-down");
	}, 24000);
	
	setTimeout(function () {
		// 25s
		animeLog("Keyframe: 25s");
		aSlime.addClass("final");
		aGreenGear.addClass("fall-down");
	}, 25000);
	
	setTimeout(function () {
		// 26s
		animeLog("Keyframe: 26s");
		aGreenGear.addClass("final");
	}, 26000);
	
	setTimeout(function () {
		// 30s
		animeLog("Keyframe: 30s");
		aNormalButton.addClass("fall-down");
	}, 30000);
	
	setTimeout(function () {
		// 31s
		animeLog("Keyframe: 31s");
		aNormalButton.addClass("final");
	}, 31000);
	
	setTimeout(function () {
		// 35s
		animeLog("Keyframe: 35s");
		aYellowButton.addClass("fall-down");
	}, 35000);
	
	setTimeout(function () {
		// 36s
		animeLog("Keyframe: 36s");
		aYellowButton.addClass("final");
	}, 36000);
	
	setTimeout(function () {
		// 44.5s
		animeLog("Keyframe: 44.5s");
		aGrassBlockGrowingFinal.css("top", "576px");
	}, 44500);
	
	setTimeout(function () {
		// 46s
		animeLog("Keyframe: 46s");
		aDecorationsU.addClass("in");
		aDecorationsD.addClass("in");
	}, 46000);
	
	setTimeout(function () {
		// 46.5s
		animeLog("Keyframe: 46.5s");
		aBgImg.addClass("in");
	}, 46500);
	
	setTimeout(function () {
		// 48s
		animeLog("Keyframe: 48s");
		aTitleText.addClass("in");
	}, 48000);
	
	setTimeout(function () {
		// 49s
		animeLog("Keyframe: 49s");
		aDecorationsD.css("top", "416px");
		aBlackPanelD.addClass("in");
		aTitleButtons.addClass("in");
	}, 49000);
	
	setTimeout(function () {
		// 50.5s
		animeLog("Keyframe: 50.5s");
		aTitleText.addClass("out");
		aDecorationsD.css("top", "544px");
		aBlackPanelD.removeClass("in");
		aTitleButtons.removeClass("in");
		aBgImg.removeClass("fr0").addClass("fr1");
		aSaveTitle.addClass("in");
	}, 50500);
	
	setTimeout(function () {
		// 51s
		animeLog("Keyframe: 51s");
		aSaveSlots.addClass("in");
	}, 51000);
	
	setTimeout(function () {
		// 52.5s
		animeLog("Keyframe: 52.5s");
		aSaveTitle.removeClass("in");
		aSaveSlots.removeClass("in").addClass("out");
	}, 52500);
	
	setTimeout(function () {
		// 53s
		animeLog("Keyframe: 53s");
		aDecorationsU.removeClass("in");
		aDecorationsD.css("top", "100%");
	}, 53000);
	
	setTimeout(function () {
		// 53.5s
		animeLog("Keyframe: 53.5s");
		aBgImg.removeClass("in");
	}, 53500);
	
	setTimeout(function () {
		// 54.5s
		animeLog("Keyframe: 54.5s");
		aEndingTitle.show().addClass("animated zoomIn");
		aEndingPlayer.show().addClass("animated fadeInLeft");
	}, 54500);
	
	setTimeout(function () {
		// 55.5s
		animeLog("Keyframe: 55.5s");
		aEndingFooter.show().addClass("animated flipInX");
	}, 55500);
	
	setTimeout(function () {
		// 59s
		animeLog("Keyframe: 59s");
		aEndingObjects.addClass("animated fadeOut");
	}, 59000);
	
	setTimeout(function () {
		// 60s
		animeLog("Animation ended");
		aEndingObjects.hide();
		aStage.css("background-image", "none").children().remove();
	}, 60000);
});
