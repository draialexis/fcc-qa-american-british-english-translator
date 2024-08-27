const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  let translator = new Translator();

  suite('Translate American to British English', () => {
    test('Translate "Mangoes are my favorite fruit." to British English', () => {
      let input = 'Mangoes are my favorite fruit.';
      let output = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "I ate yogurt for breakfast." to British English', () => {
      let input = 'I ate yogurt for breakfast.';
      let output = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "We had a party at my friend s condo." to British English', () => {
      let input = 'We had a party at my friend\'s condo.';
      let output = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
      let input = 'Can you toss this in the trashcan for me?';
      let output = 'Can you toss this in the <span class="highlight">bin</span> for me?';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "The parking lot was full." to British English', () => {
      let input = 'The parking lot was full.';
      let output = 'The <span class="highlight">car park</span> was full.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "Like a high tech Rube Goldberg machine." to British English', () => {
      let input = 'Like a high tech Rube Goldberg machine.';
      let output = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "To play hooky means to skip class or work." to British English', () => {
      let input = 'To play hooky means to skip class or work.';
      let output = 'To <span class="highlight">bunk off</span> means to skip class or work.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "No Mr. Bond, I expect you to die." to British English', () => {
      let input = 'No Mr. Bond, I expect you to die.';
      let output = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "Dr. Grosh will see you now." to British English', () => {
      let input = 'Dr. Grosh will see you now.';
      let output = '<span class="highlight">Dr</span> Grosh will see you now.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "Lunch is at 12:15 today." to British English', () => {
      let input = 'Lunch is at 12:15 today.';
      let output = 'Lunch is at <span class="highlight">12.15</span> today.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Translate "The Parking lot was full." to British English', () => {
      let input = 'The Parking lot was full.';
      let output = 'The <span class="highlight">Car park</span> was full.';
      assert.equal(translator.americanToBritish(input), output);
    });  });

  suite('Translate British to American English', () => {
    test('Translate "We watched the footie match for a while." to American English', () => {
      let input = 'We watched the footie match for a while.';
      let output = 'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "Paracetamol takes up to an hour to work." to American English', () => {
      let input = 'Paracetamol takes up to an hour to work.';
      let output = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "First, caramelise the onions." to American English', () => {
      let input = 'First, caramelise the onions.';
      let output = 'First, <span class="highlight">caramelize</span> the onions.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "I spent the bank holiday at the funfair." to American English', () => {
      let input = 'I spent the bank holiday at the funfair.';
      let output = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "I had a bicky then went to the chippy." to American English', () => {
      let input = 'I had a bicky then went to the chippy.';
      let output = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "I ve just got bits and bobs in my bum bag." to American English', () => {
      let input = 'I\'ve just got bits and bobs in my bum bag.';
      let output = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', () => {
      let input = 'The car boot sale at Boxted Airfield was called off.';
      let output = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "Have you met Mrs Kalyani?" to American English', () => {
      let input = 'Have you met Mrs Kalyani?';
      let output = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "Prof Joyner of King s College, London." to American English', () => {
      let input = 'Prof Joyner of King\'s College, London.';
      let output = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Translate "Tea time is usually around 4 or 4.30." to American English', () => {
      let input = 'Tea time is usually around 4 or 4.30.';
      let output = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      assert.equal(translator.britishToAmerican(input), output);
    });
  });

  suite('Highlight Translations', () => {
    test('Highlight translation in "Mangoes are my favorite fruit."', () => {
      let input = 'Mangoes are my favorite fruit.';
      let output = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Highlight translation in "I ate yogurt for breakfast."', () => {
      let input = 'I ate yogurt for breakfast.';
      let output = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.americanToBritish(input), output);
    });

    test('Highlight translation in "We watched the footie match for a while."', () => {
      let input = 'We watched the footie match for a while.';
      let output = 'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.britishToAmerican(input), output);
    });

    test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
      let input = 'Paracetamol takes up to an hour to work.';
      let output = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.britishToAmerican(input), output);
    });
  });
});
