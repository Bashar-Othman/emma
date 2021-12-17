	
	 var  ROW=5;
	 var  COL=5  ;

  
	function isSafe(M, row, col, visited)
	{
		return (row >= 0) && (row < ROW) && (col >= 0) && (col < COL) && (M[row][col] == 1 && !visited[row][col]);
	}
	
	
	function DFS(M, row, col, visited)
	{
		var rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
		var colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];
		visited[row][col] = true;
		for (var k = 0; k < 8; ++k)
		{
			if (isSafe(M, row + rowNbr[k], col + colNbr[k], visited))
			{
				DFS(M, row + rowNbr[k], col + colNbr[k], visited);
			}
		}
	}
	
	function countForest(M)
	{
		var visited = Array(ROW).fill(false).map(() => new Array(COL).fill(false));
		var count = 0;
		for (var i = 0; i < ROW; ++i)
		{
			for (var j = 0; j < COL; ++j)
			{
				if (M[i][j] == 1 && !visited[i][j])
				{
					// If a cell with
					DFS(M, i, j, visited);
					++count;
				}
			}
		}
		return count;
	}


var M = [
			[0, 0, 1, 1, 0, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 1, 0, 0, 0, 1],
			[0, 1, 0, 0, 1, 1],
			[1, 0, 0, 1, 1, 1]
		];
 		console.log("Number of Tree is: " + countForest(M));