import { USERS, ROOMS, TRANSACTIONS, MENUS, COMPLAINTS, DISCUSSIONS, UI_ROADMAP } from '../../mockData/mockData.js';

const summaryGrid = document.getElementById('summaryGrid');
const todoChips = document.getElementById('todoChips');

const summaryItems = [
  { label: 'Users', value: USERS.length },
  { label: 'Rooms', value: ROOMS.length },
  { label: 'Transactions', value: TRANSACTIONS.length },
  { label: 'Menus', value: MENUS.length },
  { label: 'Complaints', value: COMPLAINTS.length },
  { label: 'Discussions', value: DISCUSSIONS.length }
];

summaryGrid.innerHTML = summaryItems
  .map(
    (item) => `
      <article class="summary-item" aria-label="${item.label} summary">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </article>
    `
  )
  .join('');

todoChips.innerHTML = UI_ROADMAP.map((item) => `<span class="chip">${item}</span>`).join('');
