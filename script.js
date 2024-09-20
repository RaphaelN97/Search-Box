document.getElementById('searchBox').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const searchText = this.value.toLowerCase();
      const resultDiv = document.getElementById('result');
      const dogText = document.getElementById('dogText');
      
      if (searchText === 'dog') {
        resultDiv.classList.remove('hidden');
        
        const dogParagraph = `The dog is a domestic animal that has been living with humans for thousands of years. 
                              A dog is a loyal companion, and people around the world love their dogs. 
                              Many breeds of dogs exist, and each dog has its unique characteristics. 
                              Whether it's a big dog or a small dog, they all have an important place in people's lives. 
                              Dogs are often trained to be working dogs, helping in many tasks, and they are commonly referred to as man's best friend.`;
  
        const highlightedText = dogParagraph.replace(/(dog)/gi, '<span class="highlight">$1</span>');
  
        dogText.innerHTML = highlightedText;
      } else {
        resultDiv.classList.add('hidden');
      }
    }
  });
  