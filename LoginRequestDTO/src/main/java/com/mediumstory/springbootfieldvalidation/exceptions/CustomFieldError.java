package com.mediumstory.springbootfieldvalidation.exceptions;

public class CustomFieldError {
	
	
	private String message;
	private String field;
	

	public CustomFieldError() {
	}
	
	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}