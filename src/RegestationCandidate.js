import React, { useState } from 'react';
import './RegestationCandidate.css';

export default function RegestationCandidate() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="bg-container">
      <div className="form-container">
        <h1>
          අපේක්ෂකයා ලියාපදිංචි කිරීමේ පෝරමය<br />
          REGISTRATION FORM CANDIDATE
        </h1>

        <form onSubmit={handleSubmit}>
          <table className="form-table">
            <tbody>
              <tr>
                <td>සම්පූර්ණ නම<br />Full Name</td>
                <td colSpan="3">
                  <input type="text" name="name" required />
                </td>
              </tr>

              <tr>
                <td>පරිපාලක නම<br />Admin Name</td>
                <td colSpan="3">
                  <input type="text" name="adminName" required />
                </td>
              </tr>

              <tr>
                <td>ජා.හැ.අන්කය<br />ID</td>
                <td colSpan="3">
                  <input type="text" name="id" />
                </td>
              </tr>

              <tr>
                <td>උපන් දිනය<br />Date of Birth</td>
                <td>
                  <input type="date" name="dob" />
                </td>
              </tr>

              <tr>
                <td>ස්ත්‍රී/පුරුෂ<br />Gender</td>
                <td>
                  <select name="gender">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>ලිපිනය<br />Address</td>
                <td colSpan="3">
                  <input type="text" name="address" required />
                </td>
              </tr>

              <tr>
                <td>විද්‍යුත් තැපෑල<br />Email</td>
                <td colSpan="3">
                  <input type="email" name="email" required />
                </td>
              </tr>

              <tr>
                <td>අපේක්ශකයාගේ ඡායාරූපය<br />Candidate Image</td>
                <td colSpan="3">
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  {imagePreview && (
                    <div style={{ marginTop: '10px' }}>
                      <img
                        src={imagePreview}
                        alt="Candidate Preview"
                        style={{
                          maxWidth: '150px',
                          maxHeight: '150px',
                          borderRadius: '8px',
                          border: '1px solid #ccc',
                          marginTop: '10px',
                        }}
                      />
                    </div>
                  )}
                </td>
              </tr>

               <tr>
                <td>ලාංචනය<br />Symbol</td>
                <td colSpan="3">
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  {imagePreview && (
                    <div style={{ marginTop: '10px' }}>
                      <img
                        src={imagePreview}
                        alt="Candidate Preview"
                        style={{
                          maxWidth: '150px',
                          maxHeight: '150px',
                          borderRadius: '8px',
                          border: '1px solid #ccc',
                          marginTop: '10px',
                        }}
                      />
                    </div>
                  )}
                </td>
              </tr>

            </tbody>
          </table>

          <div className="button-group">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="reset" className="reset-btn">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}
