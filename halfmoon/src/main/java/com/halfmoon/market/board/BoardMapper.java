package com.halfmoon.market.board;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.BoardEntity;

@Mapper
public interface BoardMapper {
	List<BoardEntity> selBoardList();
	BoardEntity selBoard(BoardEntity p);
	int insBoard(BoardEntity p);
	int updBoard(BoardEntity p);
	int delBoard(BoardEntity p);
}
