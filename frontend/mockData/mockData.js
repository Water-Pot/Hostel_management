export const ENUMS = {
  ROLE: {
    TENANT: 'TENANT',
    ADMIN: 'ADMIN'
  },
  PAYMENT_METHOD: ['BKASH', 'NAGAD', 'ROCKET', 'ONLINE', 'OFFLINE'],
  TRANSACTION_TYPE: ['DEBIT', 'CREDIT'],
  PAYMENT_PURPOSE: ['ROOM_RENT', 'MEAL_TOKEN'],
  DAY: ['SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
  MEAL_TYPE: ['BREAKFAST', 'LUNCH', 'DINNER', 'SNACKS'],
  COMPLAINT_STATUS: ['PENDING', 'IN_PROGRESS', 'RESOLVED', 'REJECTED'],
  ROOM_TYPE: ['SINGLE', 'DOUBLE', 'TRIPLE', 'DORM']
};

export const USERS = [
  {
    userId: 1,
    userName: 'tenant.samia',
    firstName: 'Samia',
    lastName: 'Rahman',
    email: 'samia.rahman@example.com',
    contactNo: '+8801711111111',
    emergencyContactNo: '+8801911111111',
    birthDate: '2001-02-14',
    permanentAddress: 'Chattogram, Bangladesh',
    passportId: 'BDX10001',
    role: ENUMS.ROLE.TENANT,
    assignedRoomId: 101,
    addedTime: '2026-03-01T10:00:00Z'
  },
  {
    userId: 2,
    userName: 'tenant.nabila',
    firstName: 'Nabila',
    lastName: 'Islam',
    email: 'nabila.islam@example.com',
    contactNo: '+8801722222222',
    emergencyContactNo: '+8801922222222',
    birthDate: '2000-11-08',
    permanentAddress: 'Cumilla, Bangladesh',
    passportId: 'BDX10002',
    role: ENUMS.ROLE.TENANT,
    assignedRoomId: 202,
    addedTime: '2026-03-02T09:30:00Z'
  },
  {
    userId: 3,
    userName: 'admin.jarin',
    firstName: 'Jarin',
    lastName: 'Sultana',
    email: 'jarin.sultana@example.com',
    contactNo: '+8801733333333',
    emergencyContactNo: '+8801933333333',
    birthDate: '1995-05-15',
    permanentAddress: 'Dhaka, Bangladesh',
    passportId: 'BDX10003',
    role: ENUMS.ROLE.ADMIN,
    assignedRoomId: null,
    addedTime: '2026-02-26T12:00:00Z'
  },
  {
    userId: 4,
    userName: 'tenant.maisha',
    firstName: 'Maisha',
    lastName: 'Noor',
    email: 'maisha.noor@example.com',
    contactNo: '+8801744444444',
    emergencyContactNo: '+8801944444444',
    birthDate: '2002-09-21',
    permanentAddress: 'Sylhet, Bangladesh',
    passportId: 'BDX10004',
    role: ENUMS.ROLE.TENANT,
    assignedRoomId: 203,
    addedTime: '2026-03-08T08:15:00Z'
  }
];

export const FLOORS = [
  { floorId: 1, floorNo: 1 },
  { floorId: 2, floorNo: 2 },
  { floorId: 3, floorNo: 3 }
];

export const ROOM_TYPES = ENUMS.ROOM_TYPE.map((roomType, index) => ({
  roomTypeId: index + 1,
  roomType
}));

export const ROOMS = [
  {
    roomId: 101,
    roomNo: 101,
    floorId: 1,
    roomType: 'DOUBLE',
    perDayRentFee: 350,
    capacity: 2,
    occupancy: 1,
    isAvailable: true
  },
  {
    roomId: 202,
    roomNo: 202,
    floorId: 2,
    roomType: 'TRIPLE',
    perDayRentFee: 300,
    capacity: 3,
    occupancy: 2,
    isAvailable: true
  },
  {
    roomId: 203,
    roomNo: 203,
    floorId: 2,
    roomType: 'SINGLE',
    perDayRentFee: 500,
    capacity: 1,
    occupancy: 1,
    isAvailable: false
  },
  {
    roomId: 305,
    roomNo: 305,
    floorId: 3,
    roomType: 'DORM',
    perDayRentFee: 220,
    capacity: 6,
    occupancy: 4,
    isAvailable: true
  }
];

export const ROOM_RENT_HISTORY = [
  {
    recordId: 1,
    userId: 1,
    roomId: 101,
    startDate: '2026-04-01',
    endDate: '2026-04-30',
    roomRentDays: 30,
    mealStatus: true,
    totalMealCount: 52,
    monthlyDue: 10500,
    paidAmount: 7000,
    dueAmount: 3500,
    status: 'PARTIAL'
  },
  {
    recordId: 2,
    userId: 2,
    roomId: 202,
    startDate: '2026-04-01',
    endDate: '2026-04-30',
    roomRentDays: 30,
    mealStatus: true,
    totalMealCount: 48,
    monthlyDue: 9000,
    paidAmount: 9000,
    dueAmount: 0,
    status: 'PAID'
  },
  {
    recordId: 3,
    userId: 4,
    roomId: 203,
    startDate: '2026-04-01',
    endDate: '2026-04-30',
    roomRentDays: 30,
    mealStatus: false,
    totalMealCount: 0,
    monthlyDue: 15000,
    paidAmount: 0,
    dueAmount: 15000,
    status: 'DUE'
  }
];

export const TRANSACTIONS = [
  {
    transactionId: 1001,
    userId: 1,
    roomId: 101,
    transactionType: 'CREDIT',
    paymentMethod: 'BKASH',
    paymentPurpose: 'ROOM_RENT',
    amount: 7000,
    referenceNo: 'BKX-930182',
    createdAt: '2026-04-05T09:25:00Z',
    createdBy: 'tenant.samia'
  },
  {
    transactionId: 1002,
    userId: 2,
    roomId: 202,
    transactionType: 'CREDIT',
    paymentMethod: 'ONLINE',
    paymentPurpose: 'ROOM_RENT',
    amount: 9000,
    referenceNo: 'ONL-140991',
    createdAt: '2026-04-04T11:45:00Z',
    createdBy: 'tenant.nabila'
  },
  {
    transactionId: 1003,
    userId: 1,
    roomId: 101,
    transactionType: 'DEBIT',
    paymentMethod: 'OFFLINE',
    paymentPurpose: 'MEAL_TOKEN',
    amount: 1200,
    referenceNo: 'ADM-REQ-3221',
    createdAt: '2026-04-09T15:20:00Z',
    createdBy: 'admin.jarin'
  },
  {
    transactionId: 1004,
    userId: 4,
    roomId: 203,
    transactionType: 'CREDIT',
    paymentMethod: 'NAGAD',
    paymentPurpose: 'MEAL_TOKEN',
    amount: 600,
    referenceNo: 'NGD-226731',
    createdAt: '2026-04-10T18:40:00Z',
    createdBy: 'tenant.maisha'
  }
];

export const MEAL_TYPES = ENUMS.MEAL_TYPE.map((mealType, index) => ({
  mealTypeId: index + 1,
  mealType
}));

export const MENU_ITEMS = [
  { menuItemId: 1, itemName: 'Paratha', description: 'Whole wheat layered flatbread' },
  { menuItemId: 2, itemName: 'Egg Curry', description: 'Boiled eggs in masala gravy' },
  { menuItemId: 3, itemName: 'Rice', description: 'Steamed rice' },
  { menuItemId: 4, itemName: 'Chicken Curry', description: 'Spiced chicken gravy' },
  { menuItemId: 5, itemName: 'Lentil Soup', description: 'Yellow dal with vegetables' },
  { menuItemId: 6, itemName: 'Seasonal Fruit', description: 'Fresh fruit bowl' },
  { menuItemId: 7, itemName: 'Khichuri', description: 'Rice-lentil one-pot meal' },
  { menuItemId: 8, itemName: 'Vegetable Stir Fry', description: 'Mixed vegetables with light spices' }
];

export const MENUS = [
  {
    menuId: 501,
    menuName: 'Sunday Breakfast Menu',
    day: 'SUNDAY',
    mealType: 'BREAKFAST',
    menuItemIds: [1, 2, 6],
    servedAt: '08:00-10:00'
  },
  {
    menuId: 502,
    menuName: 'Monday Lunch Menu',
    day: 'MONDAY',
    mealType: 'LUNCH',
    menuItemIds: [3, 4, 5],
    servedAt: '13:00-15:00'
  },
  {
    menuId: 503,
    menuName: 'Wednesday Dinner Menu',
    day: 'WEDNESDAY',
    mealType: 'DINNER',
    menuItemIds: [3, 7, 8],
    servedAt: '20:00-22:00'
  },
  {
    menuId: 504,
    menuName: 'Friday Snacks Menu',
    day: 'FRIDAY',
    mealType: 'SNACKS',
    menuItemIds: [6, 8],
    servedAt: '17:00-18:00'
  }
];

export const MEAL_TOKEN_HISTORY = [
  {
    tokenId: 9001,
    userId: 1,
    date: '2026-04-12',
    day: 'SUNDAY',
    mealType: 'BREAKFAST',
    tokenCount: 1,
    sourceTransactionId: 1004
  },
  {
    tokenId: 9002,
    userId: 2,
    date: '2026-04-14',
    day: 'TUESDAY',
    mealType: 'DINNER',
    tokenCount: 1,
    sourceTransactionId: 1002
  },
  {
    tokenId: 9003,
    userId: 4,
    date: '2026-04-15',
    day: 'WEDNESDAY',
    mealType: 'LUNCH',
    tokenCount: 1,
    sourceTransactionId: 1004
  }
];

export const COMPLAINTS = [
  {
    complaintId: 801,
    title: 'Water leakage near bathroom door',
    description: 'Water drips continuously after midnight and floor gets slippery.',
    userId: 1,
    roomId: 101,
    complaintStatus: 'PENDING',
    createdAt: '2026-04-13T06:20:00Z',
    updatedAt: '2026-04-13T06:20:00Z'
  },
  {
    complaintId: 802,
    title: 'Ceiling fan speed issue',
    description: 'Fan in room 202 runs at very low speed even at max setting.',
    userId: 2,
    roomId: 202,
    complaintStatus: 'IN_PROGRESS',
    createdAt: '2026-04-10T14:00:00Z',
    updatedAt: '2026-04-14T12:10:00Z'
  },
  {
    complaintId: 803,
    title: 'Window lock broken',
    description: 'Right-side window lock is damaged and cannot be closed securely.',
    userId: 4,
    roomId: 203,
    complaintStatus: 'RESOLVED',
    createdAt: '2026-04-02T11:50:00Z',
    updatedAt: '2026-04-07T16:30:00Z'
  }
];

export const DISCUSSIONS = [
  {
    discussionId: 701,
    roomId: 101,
    userId: 1,
    description: 'Can we shift dinner timing to 8:30 PM during exam week?',
    createdAt: '2026-04-11T19:10:00Z'
  },
  {
    discussionId: 702,
    roomId: 202,
    userId: 2,
    description: 'Need volunteers for floor cleaning awareness campaign on Saturday.',
    createdAt: '2026-04-12T08:30:00Z'
  }
];

export const COMMENTS = [
  {
    commentId: 6001,
    discussionId: 701,
    userId: 3,
    roomId: 101,
    comment: 'Approved for exam week. Meal setup will be updated from Monday.',
    createdAt: '2026-04-12T07:00:00Z'
  },
  {
    commentId: 6002,
    discussionId: 702,
    userId: 4,
    roomId: 202,
    comment: 'I can join after 10 AM. Please share checklist.',
    createdAt: '2026-04-12T10:45:00Z'
  }
];

export const UI_ROADMAP = [
  'Tenant Dashboard with room/rent/menu cards',
  'Tenant Rent History and Payment page (BKASH/NAGAD/ROCKET/ONLINE/OFFLINE)',
  'Tenant Meals page with day-wise menu + meal token history',
  'Tenant Community page (Discussion + Comments)',
  'Tenant Complaint submission and status tracker',
  'Admin Dashboard (users, pending complaints, transactions)',
  'Admin User & Role Management table',
  'Admin Room Allocation & Availability',
  'Admin Financial reports and payment processing',
  'Admin Meal setup and menu planner',
  'Admin Complaint status management'
];

export default {
  ENUMS,
  USERS,
  FLOORS,
  ROOM_TYPES,
  ROOMS,
  ROOM_RENT_HISTORY,
  TRANSACTIONS,
  MEAL_TYPES,
  MENU_ITEMS,
  MENUS,
  MEAL_TOKEN_HISTORY,
  COMPLAINTS,
  DISCUSSIONS,
  COMMENTS,
  UI_ROADMAP
};
