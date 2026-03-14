const courses = [
  {
    title: 'AlcoholEdu for College',
    subtitle: 'F25U AlcoholEdu for College',
    term: 'Fall 2025',
    banner: 'linear-gradient(135deg, #ce4d3f, #e79381)',
  },
  {
    title: 'CyberSafe KU: Data Privacy & Security',
    subtitle: 'F25U CyberSafe KU: Data Privacy',
    term: 'Fall 2025',
    banner: 'linear-gradient(135deg, #35424d, #7a8b99)',
  },
  {
    title: 'RespectEdu for College',
    subtitle: 'F25UN RespectEdu for College',
    term: 'Fall 2025',
    banner: 'linear-gradient(135deg, #5f7c3e, #9ebf67)',
  },
  {
    title: '4262-46508: ECON 145 Principles of Macroeconomics',
    subtitle: 'ECON 145: Principles of Macroeconomics',
    term: 'Spring 2026',
    banner: 'linear-gradient(135deg, #1679c4, #68b9ef)',
  },
  {
    title: '4262-51025: EECS 268 Programming II LBN',
    subtitle: 'EECS 268: Programming II LBN',
    term: 'Spring 2026',
    banner: 'linear-gradient(135deg, #117767, #36ad99)',
  },
  {
    title: '4262-51869: COMS 130 Public Speaking',
    subtitle: 'COMS 130: Public Speaking',
    term: 'Spring 2026',
    banner: 'linear-gradient(135deg, #2f4f96, #597bc8)',
  },
  {
    title: 'COMS Research Opportunities SP 2026',
    subtitle: 'COMS Research Opportunities',
    term: 'Spring 2026',
    banner: 'linear-gradient(135deg, #7f5b0a, #b88c2d)',
  },
  {
    title: 'MATH 127 Lab Page Spring 2026',
    subtitle: 'MATH 127 Lab Page',
    term: 'Spring 2026',
    banner: 'linear-gradient(135deg, #b30d5d, #ea4f9a)',
  },
  {
    title: 'MATH 127 Lecture Page Spring 2026',
    subtitle: 'MATH 127 Lecture Page',
    term: 'Spring 2026',
    banner: 'linear-gradient(135deg, #3b5031, #6f8b5f)',
  },
];

const grid = document.querySelector('#courses-grid');
const template = document.querySelector('#course-card-template');
const menuToggle = document.querySelector('#menu-toggle');
const mobileAccountMenu = document.querySelector('#mobile-account-menu');

courses.forEach((course) => {
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector('.course-card');

  clone.querySelector('.course-title').textContent = course.title;
  clone.querySelector('.course-subtitle').textContent = course.subtitle;
  clone.querySelector('.course-term').textContent = course.term;
  clone.querySelector('.course-banner').style.background = course.banner;

  card.setAttribute(
    'aria-label',
    `${course.subtitle} (${course.term})`
  );

  grid.appendChild(clone);
});

if (menuToggle && mobileAccountMenu) {
  menuToggle.addEventListener('click', () => {
    const isHidden = mobileAccountMenu.hasAttribute('hidden');

    if (isHidden) {
      mobileAccountMenu.removeAttribute('hidden');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Close account menu');
      return;
    }

    mobileAccountMenu.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open account menu');
  });
}
