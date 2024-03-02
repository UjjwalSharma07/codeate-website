import React, { useState, useEffect } from "react";
import styles from "../styles/newproject.module.css";
import { BsExclamationCircle } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Newproject = () => {
  const initialValues = {
    Pname: "",
    Description: "",
    tstack: "",
    Pstatement: "",
    Solution: "",
    Demo: "",
    Collaborators: "",
    Prequistics: "",
    Author: "",
    Resources: "",
    Psteps: "",
    Tdescription: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.Pname) {
      errors.Pname = "Please fill the Project name";
    }
    if (!values.Description) {
      errors.Description = "Please fill the Description";
    }
    if (!values.tstack) {
      errors.tstack = "Please fill the Technology Stack";
    }
    if (!values.Pstatement) {
      errors.Pstatement = "Please fill the Problem Statement";
    }
    if (!values.Solution) {
      errors.Solution = "Please fill the Solution";
    }
    if (!values.Demo) {
      errors.Demo = "Please fill the field";
    }
    if (!values.Collaborators) {
      errors.Collaborators = "Please fill the field";
    }
    if (!values.Prequistics) {
      errors.Prequistics = "Please fill the field";
    }
    if (!values.Author) {
      errors.Author = " Please fill the field";
    }
    if (!values.Resources) {
      errors.Resources = "Please fill the field";
    }
    if (!values.Psteps) {
      errors.Psteps = "Please fill the field";
    }

    if (!values.Tdescription) {
      errors.Tdescription = "Please fill the field";
    }

    return errors;
  };

  return (
    <div className={styles.main__container}>
      <div className={styles.container}>
        <h1 className="text-2xl">New Project</h1>
        {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.Pname}>
            <label className="flex flex-row ">
              Project Name
              <BsExclamationCircle className="mt-1 mx-2" />
            </label>
            <br />
            <input
              className="border-black border"
              type="text"
              name="Pname"
              value={formValues.Pname}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Pname}</p>

          <div className={styles.description}>
            <label className="flex flex-row ">
              Description <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <textarea
              className="border border-black"
              type="text"
              name="Description"
              value={formValues.Description}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph} type="invalid">
            {formErrors.Description}
          </p>

          <div className={styles.tech}>
            <label className="flex flex-row ">
              Techstack Used <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <input
              className="border border-black"
              type="text"
              name="tstack"
              value={formValues.tstack}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.tstack}</p>
          <div className={styles.tech}>
            <label className="flex flex-row " htmlFor="fname">
              Problem Statement <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <input
              className="border border-black"
              type="text"
              id="fname"
              name="Pstatement"
              value={formValues.Pstatement}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Pstatement}</p>
          <div className={styles.tech}>
            <label className="flex flex-row " htmlFor="fname">
              Solution <BsExclamationCircle className=" mt-1 mx-2 " />{" "}
            </label>
            <br />
            <input
              className="border border-black"
              type="text"
              id="fname"
              name="Solution"
              value={formValues.Solution}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Solution}</p>
          <div className={styles.tech}>
            <label className="flex flex-row " htmlFor="fname">
              Demo <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <input
              className="border border-black "
              type="text"
              id="fname"
              name="Demo"
              value={formValues.Demo}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Demo}</p>
          <div className={styles.tech}>
            <label className="flex flex-row " htmlFor="fname">
              Collaborators <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <input
              className="border border-black"
              type="text"
              id="fname"
              name="Collaborators"
              value={formValues.Collaborators}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Collaborators}</p>
          <div className={styles.tech}>
            <label className="flex flex-row " htmlFor="fname">
              Prequistics <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <input
              className="border border-black"
              type="text"
              id="fname"
              name="Prequistics"
              value={formValues.Prequistics}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Prequistics}</p>
          <div className={styles.tech}>
            <label className="flex flex-row " htmlFor="fname">
              Author <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <input
              className="border border-black"
              type="text"
              id="fname"
              name="Author"
              value={formValues.Author}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Author}</p>
          <div className={styles.description}>
            <label className="flex flex-row " htmlFor="fname">
              Resources <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <textarea
              className="border border-black"
              type="text"
              id="fname"
              name="Resources"
              value={formValues.Resources}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Resources}</p>
          <div className={styles.description}>
            <label className="flex flex-row " htmlFor="fname">
              Prototyping Steps <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <textarea
              className="border"
              type="text"
              id="fname"
              name="Psteps"
              value={formValues.Psteps}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Psteps}</p>
          <div className={styles.description}>
            <label className="flex flex-row " htmlFor="fname">
              Technical Description{" "}
              <BsExclamationCircle className="mt-1 mx-2" />{" "}
            </label>
            <br />
            <textarea
              className="border"
              type="text"
              id="fname"
              name="Tdescription"
              value={formValues.Tdescription}
              onChange={handleChange}
            />
          </div>
          <p className={styles.paragraph}>{formErrors.Tdescription}</p>
          <div className={styles.drop}>
            <h3>
              <AiOutlineCloudUpload />
              Drag and drop here
            </h3>
          </div>
          <div className={styles.buttons}>
            <button className={styles.btn}>Select File</button>
          </div>
          <div className={styles.btn24}>
            <button className={styles.Add3}>Download</button>
          </div>
          <div className={styles.btngroup1}>
            <button className={styles.btn2}>Review</button>
          </div>
          <div className={styles.btngroup}>
            <button className={styles.btn1}>Save</button>
          </div>
          <div className={styles.btngroup3}>
            <button className={styles.btn3}>Publish</button>
          </div>
          <div className={styles.btn22}>
            <button className={styles.Add}>Add New Fields</button>
          </div>
          <div className={styles.btn23}>
            <button className={styles.Add1}>Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newproject;
