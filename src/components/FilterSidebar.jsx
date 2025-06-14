import React from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import './FilterSidebar.css';

const FilterSidebar = ({ show = true }) => {
  const [filters, setFilters] = React.useState([
    { title: 'CUSTOMIZABLE', options: ['Yes', 'No'], isOpen: false },
    { title: 'IDEAL FOR', options: ['All', 'Work', 'Travel', 'Casual', 'Sport'], isOpen: true },
    { title: 'OCCASION', options: ['All', 'Daily', 'Special', 'Formal', 'Casual'], isOpen: true },
    { title: 'WORK', options: ['All', 'Office', 'Remote', 'Outdoor', 'Creative'], isOpen: true },
    { title: 'FABRIC', options: ['All', 'Cotton', 'Leather', 'Nylon', 'Canvas'], isOpen: true },
    { title: 'SEGMENT', options: ['All', 'Premium', 'Standard', 'Budget'], isOpen: true },
    { title: 'SUITABLE FOR', options: ['All', 'Men', 'Women', 'Unisex', 'Kids'], isOpen: false },
    { title: 'RAW MATERIALS', options: ['All', 'Organic', 'Synthetic', 'Recycled'], isOpen: false },
    { title: 'PATTERN', options: ['All', 'Solid', 'Striped', 'Printed', 'Textured'], isOpen: false }
  ]);

  const toggleFilter = (index) => {
    setFilters(filters.map((filter, i) => 
      i === index ? { ...filter, isOpen: !filter.isOpen } : filter
    ));
  };

  const FilterContent = () => (
    <div className="filter-content">
      {filters.map((filter, idx) => (
        <div className="filter-section" key={filter.title}>
          <button 
            className="filter-section-title" 
            onClick={() => toggleFilter(idx)}
            aria-expanded={filter.isOpen}
          >
            <span>{filter.title}</span>
            {filter.isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {filter.isOpen && (
            <div className="filter-options">
              {filter.options.map((option) => (
                <label className="filter-option" key={option}>
                  <input 
                    type="checkbox" 
                    className="filter-checkbox"
                    aria-label={`Filter by ${option}`}
                  />
                  <span className="filter-label">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  if (!show) return null;
  return (
    <aside className="filter-sidebar">
      <FilterContent />
    </aside>
  );
};

export default FilterSidebar;
