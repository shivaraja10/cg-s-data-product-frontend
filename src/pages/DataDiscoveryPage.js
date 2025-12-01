import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/DataDiscoveryPage.css';

const DataDiscoveryPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('data-discovery');
  const [selectedRegion, setSelectedRegion] = useState('Mexico');
  const [fileLimit, setFileLimit] = useState(50);
  const [mappedFiles, setMappedFiles] = useState([
    { id: 1, name: 'PE_74321', selected: true, mapping: true, percentage: 96 },
    { id: 2, name: 'SKU_Map', selected: true, mapping: true, percentage: 100 },
    { id: 3, name: 'Cust_Data', selected: true, mapping: true, percentage: 100 },
    { id: 4, name: 'Prod_Data', selected: false, mapping: false, percentage: 80 },
  ]);

  const tabs = [
    { id: 'home', label: 'HOME' },
    { id: 'data-discovery', label: 'DATA DISCOVERY' },
    { id: 'prototype', label: 'PROTOTYPE EVALUATION' },
    { id: 'real-data', label: 'REAL DATA INGESTION' },
  ];

  const personas = [
    { name: 'Analyst', img: 'https://i.pravatar.cc/50?img=1' },
    { name: 'Manager', img: 'https://i.pravatar.cc/50?img=2' },
    { name: 'Developer', img: 'https://i.pravatar.cc/50?img=3' },
    { name: 'Executive', img: 'https://i.pravatar.cc/50?img=4' },
  ];

  return (
    <div className="data-discovery-page">
      {/* Header Section */}
      <div className="data-discovery__header">
        <div className="data-discovery__personas">
          {personas.map((persona, idx) => (
            <img key={idx} src={persona.img} alt={persona.name} className="data-discovery__persona-avatar" title={persona.name} />
          ))}
        </div>
        <div className="data-discovery__header-content">
          <h1>Understanding how various personas can use the solution –</h1>
          <h2>Data Product Powered by AI</h2>
        </div>
        <div className="data-discovery__date">Date: 06/24/2025</div>
      </div>

      {/* Navigation Tabs */}
      <div className="data-discovery__nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`data-discovery__tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="data-discovery__container">
        {/* Left Sidebar */}
        <aside className="data-discovery__sidebar">
          <div className="data-discovery__sidebar-section">
            <label>Data Discovery</label>
            <div className="data-discovery__input-group">
              <span className="data-discovery__label">Name of file</span>
              <input type="text" placeholder="WorkSpace1" className="data-discovery__input" />
            </div>
          </div>

          <div className="data-discovery__sidebar-section">
            <div className="data-discovery__input-group">
              <span className="data-discovery__label">No of Files</span>
              <select className="data-discovery__select">
                <option>File Limit 50</option>
                <option>File Limit 100</option>
                <option>File Limit 200</option>
              </select>
            </div>
          </div>

          <div className="data-discovery__sidebar-section">
            <button className="data-discovery__btn data-discovery__btn-primary">Enter ADL's File Path/Source</button>
          </div>

          <div className="data-discovery__sidebar-section">
            <span className="data-discovery__label">File Name</span>
            <input type="text" placeholder="ADLS/DataProduct/DataDiscovery/" className="data-discovery__input data-discovery__input-small" />
          </div>

          <div className="data-discovery__sidebar-section">
            <div className="data-discovery__input-group">
              <span className="data-discovery__label">Select</span>
              <select className="data-discovery__select">
                <option>Mexico</option>
                <option>Colombia</option>
                <option>Peru</option>
              </select>
            </div>
          </div>

          <div className="data-discovery__sidebar-section">
            <button className="data-discovery__btn data-discovery__btn-primary">Select Region</button>
          </div>

          <div className="data-discovery__sidebar-section">
            <button className="data-discovery__btn data-discovery__btn-secondary">Upload Files 📁</button>
            <button className="data-discovery__btn data-discovery__btn-secondary">Upload Status: ✅</button>
          </div>

          <div className="data-discovery__sidebar-section">
            <button className="data-discovery__btn data-discovery__btn-danger">Back Metadata:</button>
          </div>

          <div className="data-discovery__file-list">
            {mappedFiles.map((file) => (
              <div key={file.id} className="data-discovery__file-item">
                <span className="data-discovery__file-status">●</span>
                <span>{`File${file.id} (${file.name})`}</span>
              </div>
            ))}
            <div className="data-discovery__progress-bar">
              <div className="data-discovery__progress-fill" style={{ width: '65%' }}></div>
            </div>
          </div>
        </aside>

        {/* Middle Content */}
        <main className="data-discovery__main">
          <div className="data-discovery__preview-section">
            <h3>Preview Files:</h3>
            <div className="data-discovery__preview-box">
              <p>Sample Data Ingestion from Client</p>
              <div className="data-discovery__preview-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" alt="Data Preview" />
              </div>
              <div className="data-discovery__file-details">
                <p><strong>PE_74321_Supply</strong></p>
                <p className="data-discovery__file-source">Date/Product_File_Updated</p>
                <p className="data-discovery__file-type">Customer Master</p>
              </div>
            </div>

            <div className="data-discovery__use-case">
              <h4>Use Case Analysis</h4>
              <p>Hover</p>
              <div className="data-discovery__hover-area">
                <span>▼</span>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="data-discovery__right-sidebar">
          <div className="data-discovery__ai-mapping">
            <button className="data-discovery__btn data-discovery__btn-generate">
              Generate AI Mapping
            </button>
            <span className="data-discovery__refresh-icon">⟲</span>
          </div>

          <div className="data-discovery__description">
            <p><strong>Description:</strong> Table consisting of file names, AI mapping, etc. You can directly edit and save if there are any changes.</p>
          </div>

          <table className="data-discovery__mapping-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>File Name</th>
                <th>Select Files</th>
                <th>AI Mapping</th>
                <th>% mapped to File columns</th>
              </tr>
            </thead>
            <tbody>
              {mappedFiles.map((file) => (
                <tr key={file.id} className={file.selected ? 'selected' : ''}>
                  <td>{file.id}</td>
                  <td>{file.name}</td>
                  <td><input type="checkbox" checked={file.selected} readOnly /></td>
                  <td><div className={`data-discovery__checkbox ${file.mapping ? 'checked' : ''}`}></div></td>
                  <td><span className="data-discovery__percentage">{file.percentage}</span></td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="data-discovery__btn data-discovery__btn-save">Save</button>
        </aside>
      </div>
    </div>
  );
};

export default DataDiscoveryPage;
