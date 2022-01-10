package br.com.ss.lifebank.DTOs;

public class ErrorsDTO {

	private boolean hasErros = false;
	private String errorText = "";
	
	
	
	public ErrorsDTO(boolean hasErros, String errorText) {
		this.hasErros = hasErros;
		this.errorText = errorText;
	}


	public ErrorsDTO() {
	}


	public boolean isHasErros() {
		return hasErros;
	}


	public void setHasErros(boolean hasErros) {
		this.hasErros = hasErros;
	}


	public String getErrorText() {
		return errorText;
	}


	public void setErrorText(String errorText) {
		this.errorText = errorText;
	}
	
	
	
	
	
	
	
}
