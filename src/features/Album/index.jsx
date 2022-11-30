import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhac Hoa Thinh Thanh',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/b/b/7/8bb77f69557f15b333a1d7d89fd1799b.jpg',
    },
    {
      id: 2,
      name: 'Nhac US UK',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/0/d/d/10dd6f469f1e054fb88fe101af95ecd8.jpg',
    },
    {
      id: 3,
      name: 'Nhac Coder',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/6/f/d/c6fd40f7b629aba4c99302f6a27403ab.jpg',
    },
  ];

  return (
    <div>
      <h2>Co the ban se thich</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
