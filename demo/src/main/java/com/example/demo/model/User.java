package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;  
@Entity  
@Table(name="user")
public class User implements Serializable {
	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	
	@Column(name = "Birth_Date")
	private String date_of_birth;
	
	@Column(name = "first_name")
	private String first_name;
	
	@Column(name = "Gender")
	private String gender;

	@Column(name = "Last_Name")
	private String last_name;
	

	@Column(name="Password")	
	private String password;
	
		
	@Column(name = "Phone_No")
	private String phone_no;
	

	@Column(name = "Reg_Date")
	private String reg_date;
	@Column(name = "Aadhar_No")
	private String user_aadhar;

	@Column(name = "Email")
	private String user_email;
	
	@Column(name="Verified")	
	private String verified="Pending";
	
	
	
	protected User() {
	}   
	    

		public long getId() {
			return id;
		}


		public void setId(long id) {
			this.id = id;
		}


		public String getFirstName() {
			return first_name;
		}


		public void setFirstName(String first_name) {
			this.first_name = first_name;
		}


		public String getLastName() {
			return last_name;
		}


		public void setLastName(String last_name) {
			this.last_name = last_name;
		}

		

		public String getEmail() {
			return user_email;
		}


		public void setEmail(String email) {
			this.user_email = email;
		}


		public String getGender() {
			return gender;
		}


		public void setGender(String gender) {
			this.gender = gender;
		}
		
		

		public String getPhone() {
			return phone_no;
		}


		public void setPhone(String phone) {
			this.phone_no = phone;
		}


		public String getAadhar() {
			return user_aadhar;
		}


		public void setAadhar(String aadhar) {
			this.user_aadhar = aadhar;
		}


		public String getDate_of_birth() {
			return date_of_birth;
		}


		public void setDate_of_birth(String date_of_birth) {
			this.date_of_birth = date_of_birth;
		}


		/*public int getB_month() {
			return b_month;
		}


		public void setB_month(int b_month) {
			this.b_month = b_month;
		}


		public int getB_year() {
			return b_year;
		}


		public void setB_year(int b_year) {
			this.b_year = b_year;
		}
		
		*
		*c_password: "dsd"
date_of_birth: "2019-07-19"
first_name: "avin"
gender: "male"
last_name: "thak"
password: "dsd"
phone_no: "3333333333"
reg_date: "10-6-2019"
user_aadhar: "111111111111"
user_email: "i@gm"
		*/


		public String getR_date() {
			return reg_date;
		}


		public void setR_date(String r_date) {
			this.reg_date = r_date;
		}


		/*public int getR_month() {
			return r_month;
		}


		public void setR_month(int r_month) {
			this.r_month = r_month;
		}


		public int getR_year() {
			return r_year;
		}


		public void setR_year(int r_year) {
			this.r_year = r_year;
		}*/

		
		public String getVerified() {
			return verified;
		}
		
		public void setR_year(String verified) {
			this.verified=verified;
		}
		
		public String getPassword() {
			return password;
		}
		
		public void setPassword(String password) {
			this.password=password;
		}


		

		public User( String b_date, String first_name, String gender, String last_name, 
				String password,String phone,String r_date, String aadhar,String email) {
			
			
			this.date_of_birth= b_date;
			this.first_name = first_name;
			this.gender = gender;
			this.last_name = last_name;
			this.password=password;
			this.phone_no=phone;
			this.reg_date = r_date;

			this.user_aadhar = aadhar;
			this.user_email = email;
			
		
			
			verified="Pending";
			
		}


		//@Override
		/*public String toString() {
			return String.format("User[id=%d, firstName='%s', lastName='%s', email='%s',"
					+ " gender='%s',phone='%d, aadhar='%s', b_day='%d', b_month='%d', b_year='%d', "
					+ "r_day='%d', r_month='%d', r_year='%d',verified='%s',password='%s']", id, firstName, lastName, 
					email,gender, phone, aadhar,/* b_day, b_month, b_year, r_day, r_month, r_year, verified, password);
		
			
		}
			*/
		
		
		
	    
	    
	    
}
