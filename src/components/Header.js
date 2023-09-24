import logoSrc from '../../templates/logo.png';

export function Header({$parent}) {
  const $target = document.createElement('header');

  $parent.appendChild($target);

  this.render = () => {
    $target.innerHTML = `<h1><img src=${logoSrc} alt="MovieList 로고" /></h1>
    <div class="search-box">
      <input type="text" placeholder="검색" />
      <button class="search-button">검색</button>
    </div>`;
  };

  this.render();
}
