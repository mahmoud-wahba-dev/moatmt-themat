// Import FlyonUI’s JavaScript to enable dropdowns, modals, etc.
import '../node_modules/flyonui/flyonui.js';

// Initialize FlyonUI
const flyonui = new FlyonUI({
  // Enable dropdown component
  components: ['dropdown'],
});

// Use the dropdown component
const dropdown = flyonui.dropdown(); 