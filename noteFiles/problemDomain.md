# Title
## Goal:

### Technical Requirements:
- Images of trees
- identification specs for a tree
- save feature - persistence
- method for storing a score
- some place to sign up

#### Stretch Goal

### Wireframe

### Lab


### js
var treeNames = [array
var treeNameParent = document.getElementById('treeName');
var correctTree = '';
var wrongTree = '';
console.log(treeNames);

function setup () {
  generateRandomTree();
  renderTreeName();
}

setup();

//handler //what is this called
treeImagesParent.addEventListener('click', function (event){
  console.log(event.target)
  })

function generateRandomTree () {
    var Math.floor(Math.random() * treeNames.length)
    console.log(index);
}

function renderTreeName (treeName) {
  var h3 = document.createElement('h3');
  h3.textContent = treeName;
  treeNameParent.append(h3);
}
