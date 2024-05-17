(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();

// This worked because when the function is initially called the event listener was essentially stored in closure and was basically primed for use still having access to the header variable even though the function exited the execution stack.
