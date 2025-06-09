import React from 'react';

export default function RegestationCandidate() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    alert('Registration Successful');
  };

  return (
    <>
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
                    <input type="text" name="dob" />
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
              </tbody>
            </table>

            <div className="button-group">
              <button type="submit" className="submit-btn">Submit</button>
              <button type="reset" className="submit-btn">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
