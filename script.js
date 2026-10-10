// SiteGen AI Interactive Runtime Scripts
document.addEventListener('DOMContentLoaded', () => {
  console.log('SiteGen AI site loaded successfully: Osteria Solaria');
  
  // Accordion interactivity
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item?.querySelector('.accordion-content');
      if (content) {
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
      }
    });
  });

  
});
