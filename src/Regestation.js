import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
import './Regestation.css';

export default function Regestation() {
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate(); // ✅ Setup navigation

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

  const handleClear = (e) => {
    e.preventDefault(); // Prevent default reset behavior
    navigate('/choose'); // ✅ Navigate to Choose.js route
  };

  return (
    <div className="bg-container">
      <div className="form-container">
        <h1>
          ඡන්දදායකයින් ලියාපදිංචි කිරීමේ පෝරමය<br />
          REGISTRATION FORM VOTERS
        </h1>

        <form onSubmit={handleSubmit}>
          <table className="form-table">
            <tbody>
              <tr>
                <td>සම්පූර්ණ නම <br />Full Name</td>
                <td colSpan="3"><input type="text" name="name" required /></td>
              </tr>

              <tr>
                <td>ජා.හැ.අන්කය<br />ID</td>
                <td colSpan="3"><input type="text" name="id" /></td>
              </tr>

              <tr>
                <td>උපන් දිනය<br />Date of Birth</td>
                <td><input type="date" name="dob" /></td>
              </tr>

              <tr>
                <td>ස්ත්‍රී/පුරුෂ<br />Gender</td>
                <td>
                  <select name="gender">
                    <option value="">Select</option>
                    <option value="male">පිරිමි/Male</option>
                    <option value="female">ගැහැණු/Female</option>
                    <option value="other">වෙනත්/Other</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>ලිපිනය<br />Address</td>
                <td colSpan="3"><input type="text" name="address" required /></td>
              </tr>

              <tr>
                <td>විද්‍යුත් තැපෑල<br />Email</td>
                <td colSpan="3"><input type="email" name="email" required /></td>
              </tr>

              <tr>
                <td>මැතිවරණ දිස්ත්‍රික්කය<br />Election District</td>
                <td colSpan={3}>
                  <select name="district">
                    <option value="">Select District</option>
                    <option value="ampara">Ampara</option>
                    <option value="anuradhapura">Anuradhapura</option>
                    <option value="badulla">Badulla</option>
                    <option value="batticaloa">Batticaloa</option>
                    <option value="colombo">Colombo</option>
                    <option value="galle">Galle</option>
                    <option value="gampaha">Gampaha</option>
                    <option value="hambantota">Hambantota</option>
                    <option value="jaffna">Jaffna</option>
                    <option value="kalutara">Kalutara</option>
                    <option value="kandy">Kandy</option>
                    <option value="kegalle">Kegalle</option>
                    <option value="kilinochchi">Kilinochchi</option>
                    <option value="kurunegala">Kurunegala</option>
                    <option value="mannar">Mannar</option>
                    <option value="matale">Matale</option>
                    <option value="matara">Matara</option>
                    <option value="monaragala">Monaragala</option>
                    <option value="mullaitivu">Mullaitivu</option>
                    <option value="nuwara-eliya">Nuwara Eliya</option>
                    <option value="polonnaruwa">Polonnaruwa</option>
                    <option value="puttalam">Puttalam</option>
                    <option value="ratnapura">Ratnapura</option>
                    <option value="trincomalee">Trincomalee</option>
                    <option value="vavuniya">Vavuniya</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>ඡන්දදායකයාගේ ඡායාරූපය<br />Voter Image</td>
                <td colSpan="3">
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  {imagePreview && (
                    <div style={{ marginTop: '10px' }}>
                      <img
                        src={imagePreview}
                        alt="Voter Preview"
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
            <button type="button" className="reset-btn" onClick={handleClear}>Clear</button>
            {/* ✅ Use type="button" and onClick for custom behavior */}
          </div>
        </form>
      </div>
    </div>
  );
}
