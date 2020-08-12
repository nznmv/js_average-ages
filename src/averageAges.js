'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  // write code here
  // learn how to use array methods like .filter .map .some .every .find .reduce
  // avoid using loop and forEach
  // replace `if ()` statement with &&, || or ?:
  // without nesting
  const menAges = people
    .filter(
      man => century
        ? man.sex === 'm' && Math.ceil(man.died / 100) === century
        : man.sex === 'm'
    )
    .map(man => man.died - man.born);

  return menAges.reduce((sum, item) => sum + item, 0) / menAges.length;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average ave of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const womenAges = people
    .filter(
      woman => withChildren
        ? people.some(human => human.mother === woman.name)
        : woman.sex === 'f'
    )
    .map(woman => woman.died - woman.born);

  return womenAges.reduce((sum, item) => sum + item, 0) / womenAges.length;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a mother and her
 * child in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for mothers who have son.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const ageDiff = people
    .filter(
      human => onlyWithSon
        ? people.some(woman => woman.name === human.mother) && human.sex === 'm'
        : people.some(woman => woman.name === human.mother)
    )
    .map(
      human => human.born - people.find(
        woman => woman.name === human.mother
      ).born
    );

  return ageDiff.reduce((sum, item) => sum + item, 0) / ageDiff.length;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
