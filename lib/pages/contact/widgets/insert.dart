import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import 'package:gsheets/gsheets.dart';

class GoogleSheetsService {
  static const _spreadsheetId =
      '1Eh9fdzDcLjM_1wwi321FEzAoWkXdeNG6jjpGw3KyAp8'; // from sheet URL

  late GSheets _gsheets;
  Spreadsheet? _spreadsheet;
  Worksheet? _worksheet;

  Future<void> init() async {
    // Load credentials from assets
    final credentials =
        json.decode(await rootBundle.loadString('assets/credentials.json'));

    _gsheets = GSheets(credentials);

    // Open spreadsheet
    _spreadsheet = await _gsheets.spreadsheet(_spreadsheetId);

    // Open first sheet (or name it)
    _worksheet = _spreadsheet!.worksheetByTitle('Sheet1');
  }

  Future<void> insertRow({
    required String firstName,
    required String lastName,
    required String email,
    required String message,
  }) async {
    if (_worksheet == null) {
      throw Exception("Worksheet not initialized. Call init() first.");
    }

    await _worksheet!.values.appendRow([
      DateTime.now().toIso8601String(),
      firstName,
      lastName,
      email,
      message,
    ]);
  }
}
