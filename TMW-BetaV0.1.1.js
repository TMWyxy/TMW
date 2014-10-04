//Copyright (C) 2014 TMW.All Rights Reserved.
//Made By Tony_Sxsw
//Version: Beta V0.1

var LevelName;


function newLevel()
{
	LevelName = Level.getWorldName();
	print("已打开: "+LevelName);
}

function leaveGame()
{
	LevelName = Level.getWorldName();
	print("已关闭: "+LevelName);
}

function Message(msg)
{
	clientMessage("[TMW] "+msg);
}

function useItem(x, y, z, a, b)
{
	switch(b)
	{
		case 57:addItemInventory(264,1,0);
			break;
		case 41:Player.setHealth(20);
			break;
		case 42:explode(x+1,y,z,5);
			break;
	}
}

function procCmd(cmd)
{
	var cmd = cmd.split(" ");
	switch(cmd[0])
	{
		case "help":
			clientMessage("帮助 - 第1页/共1页");
			clientMessage("-");
			clientMessage("点击钻石块 - 获得钻石");
			clientMessage("点击金块 - 恢复生命");
			clientMessage("点击铁块 - 产生爆炸");
			break;
		default:
			Message("此功能暂未开放，请期待往后更新 ！");
	}
}
