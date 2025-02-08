const button = document.getElementById( 'menu-toggle' );
const links  = document.getElementById( 'navbar' );

button.addEventListener( 'click', function() {
    links.classList.toggle( 'toggled' );
} );

